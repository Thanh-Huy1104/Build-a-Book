from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import openai_generate  # Import your OpenAI generation function
import stability  # Import your image generation function
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/getStory', methods=['POST'])
def get_story_and_images():
    # Get user input from the request
    user_input = request.json.get('user_input')

    # Generate the children's book story based on user input using OpenAI
    generated_story = openai_generate.generate_children_book_phrases(user_input)
    
    # Split the generated content into separate phrases
    phrases = generated_story['phrases']

    # Generate images for each phrase using the stability function
    images = {}
    for key, phrase in phrases.items():
        phrase_images = stability.stability_call(phrase)
        images[key] = phrase_images

    # Return the generated story and images as JSON in the response
    output = jsonify(images=images, story=generated_story)
    
    with open('output.json', 'w') as outfile:
        json.dump({'images': images, 'story': generated_story}, outfile, indent=4)

    return output

if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=3000)
