from flask import Flask, request, send_from_directory, render_template, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST', 'PUT', 'DELETE'])
def responses():
    return 'Response to {}.'.format(request.method)

@app.route('/<path:filename>', methods=['GET'])
def serve_file(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(port=5000)
