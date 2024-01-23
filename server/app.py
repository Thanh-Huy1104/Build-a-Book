from flask import Flask, request, jsonify
from flask_cors import CORS
import openai_generate
import stability
import json
import threading

app = Flask(__name__)
CORS(app)

def generate_images_thread(phrase, key, images):
    images[key] = stability.stability_call(phrase)

@app.route('/getStory', methods=['POST'])
def get_story_and_images():
    user_input = request.json.get('user_input')

    # Generate the children's book story based on user input using OpenAI
    generated_story = openai_generate.generate_children_book_phrases(user_input)
    
    # Split the generated content into separate phrases
    phrases = generated_story['phrases']

    # Container for image results
    images = {}
    image_threads = []

    # Starting threads for image generation
    for key, phrase in phrases.items():
        thread = threading.Thread(target=generate_images_thread, args=(phrase, key, images))
        thread.start()
        image_threads.append(thread)

    # Waiting for all image generation threads to complete
    for thread in image_threads:
        thread.join()

    output = jsonify(images=images, story=generated_story)
    
    with open('output.json', 'w') as outfile:
        json.dump({'images': images, 'story': generated_story}, outfile, indent=4)

    return output

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=3000)
