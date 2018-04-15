from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__, static_url_path='/static')


@app.route('/', methods=['GET'])
@app.route('/<info>', methods=['GET'])
def index(info=None):

    return render_template('index.html', info=info)


@app.route('/game', methods=['GET', 'POST'])
def game():
    try:
        rows = int(request.form.get('y'))
        columns = int(request.form.get('x'))
    except ValueError:
        info_for_user = "SELECT A NUMBER!"
        return redirect('/{info}'.format(info=info_for_user))
    
    return render_template('game.html', rows=rows, columns=columns)


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=4555,
        debug=True,
    )
