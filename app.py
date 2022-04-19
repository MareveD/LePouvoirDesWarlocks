from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def slash():
    return render_template("accueil.html")

@app.route("/index")
def index():
    return render_template("accueil.html")

@app.route("/accueil")
def accueil():
    return render_template("accueil.html")

@app.route("/creation")
def creation():
    return render_template("creation.html")

@app.route("/personnages_crees")
def personnages_crees():
    return render_template("personnages_crees.html")

@app.route("/personnages_par_defaut")
def personnages_par_defaut():
    return render_template("personnages_par_defaut.html")

if __name__ == "__main__":
    app.run(debug=True)