const App = () => {
    return <div>
        <ul>
            <li><Tweet name='Donald' username='DonaldDuck' date='7/9/24' message='I love July' /></li>
            <li><Tweet name='Daisy' username='DaisyDuck' date='7/9/24' message='I love Tuesdays' /></li>
            <li><Tweet name='Scrooge' username='ScroogeMcDuck' date='7/9/24' message='I love money' /></li>
        </ul>
    </div>
}

ReactDOM.render(<App/>, document.getElementById('root'))