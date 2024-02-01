from flask import Flask, request, send_from_directory

app = Flask(__name__)

@app.route('/', methods=['POST', 'PUT', 'DELETE'])
def responses():
    return 'Response to {}.'.format(request.method)

@app.route('/<path:filename>', methods=['GET'])
def serve_file(filename):
    return send_from_directory('.', filename)

if __name__ == '__main__':
    app.run(port=5000)
