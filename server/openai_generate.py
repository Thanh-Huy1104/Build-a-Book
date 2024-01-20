import os
from openai import OpenAI
from dotenv import load_dotenv
import json

load_dotenv()

def generate_children_book_phrases(user_input):
    # Create an OpenAI client with your API key
    key = os.getenv("OPENAI_API_KEY")
    client = OpenAI(api_key=key)

    # Define the message content with the user's input
    message = f"Generate a 2 phrases story paragraph for a children's book based on the following input: {user_input}"

    # Make the API call to generate phrases
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful assistant that generates children's book phrases."
            },
            {
                "role": "user",
                "content": message
            }
        ],
        temperature=0.7,
        max_tokens=500,
        top_p=1
    )
    
   # Extract the assistant's reply (generated phrases)
    generated_phrases_content = response.choices[0].message.content
    
    # Split the generated content into separate phrases
    phrases = generated_phrases_content.split('.')

    # Create a dictionary to store the phrases as key-value pairs with integers as keys
    generated_phrases_dict = {}
    for i, phrase in enumerate(phrases, start=1):
        # Remove any leading/trailing whitespaces
        cleaned_phrase = phrase.strip()
        if cleaned_phrase:
            generated_phrases_dict[i] = cleaned_phrase
    
    output = {"phrases": generated_phrases_dict}
    print(output)
    return output

user_input = "Once upon a time in a magical land, there lived a friendly dragon."

# Generate phrases
generated_phrases = generate_children_book_phrases(user_input)

# Print the generated phrases
print(generated_phrases)
