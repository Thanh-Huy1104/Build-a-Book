import base64
import requests
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

def stability_call(text_prompts):
    api_key = os.getenv("STABILITY_API_KEY")
    if api_key is None:
        raise Exception("API_KEY not found in the .env file")

    url = "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image"

    # Define the body of the request here
    body = {
        "steps": 40,
        "width": 1024,
        "height": 1024,
        "seed": 0,
        "cfg_scale": 5,
        "samples": 1,
        "text_prompts": [
            {
                "text": f"{text_prompts}, children book style, colourful, cartoon, animated, pastel colors",
                "weight": 1
            },
            {
                "text": "blurry, bad, blurry image, watermark, messy",
                "weight": -1
            }
        ],
    }

    headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}",
    }

    response = requests.post(url, headers=headers, json=body)

    if response.status_code != 200:
        raise Exception("Non-200 response: " + str(response.text))

    data = response.json()

    # Collect image data in a list
    images = []
    for i, image in enumerate(data["artifacts"]):
        img_base64 = image["base64"]
        with open(f'./out/txt2img_{image["seed"]}.png', "wb") as f:
            f.write(base64.b64decode(img_base64))
        images.append({"base64": img_base64})

    return images  # Return the list of image data as JSON

if __name__ == "__main__":
    text_prompts = "Once upon a time in a magical land, there lived a friendly dragon."
    stability_call(text_prompts)