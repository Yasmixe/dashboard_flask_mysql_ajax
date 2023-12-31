from flask import Flask, render_template, request, redirect
from flaskext.mysql import MySQL
import json

app = Flask(__name__)

mysql = MySQL()

app.config["MYSQL_DATABASE_HOST"] = "localhost"
app.config["MYSQL_DATABASE_PORT"] = 3306
app.config["MYSQL_DATABASE_USER"] = "root"
app.config["MYSQL_DATABASE_PASSWORD"] = "pass_root"
app.config["MYSQL_DATABASE_DB"] = "db_university"

mysql.init_app(app)


@app.route("/debut")
def page1():
    return render_template("page1.html")


@app.route("/")
def page2():
    return render_template("page2.html")


if __name__ == "__main__":
    app.run(debug=True, port=5000)
