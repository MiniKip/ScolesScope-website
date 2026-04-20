from flask import Flask, render_template

app = Flask(__name__)


# Main Page Routing
@app.route("/")
def index():
    return render_template("index.html")


# The Loop
if __name__ == "__main__":
    print("IT'S WORKING")
    app.run(debug=True)
