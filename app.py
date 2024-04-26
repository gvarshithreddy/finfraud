from flask import Flask, render_template, url_for, request
from flask_cors import CORS
app=Flask(__name__)
#insert model=model_name
CORS(app)
@app.route('/api')
def index():
    print(request.args)
    return "Hello world"



if __name__ == "__main__":
    app.run(debug=True)