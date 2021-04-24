import { Switch, Route } from 'react-router-dom'

const About =  ({
    match,
}) => {
    console.log(match)
    return (
        <div className="main-container">
            <h1>About {match.params.name} Page</h1>
            <Switch>
                <Route path="/about/pesho">
                    <h2>{match.params.name} is the best!!!!</h2>
                </Route>
                <Route path="/about/niki">
                    <h2>{match.params.name} is the best!!!!</h2>
                </Route>
            </Switch>
        </div>
    )}

export default About