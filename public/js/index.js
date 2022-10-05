'use strict';

function App() {
    React.useEffect(() => {
        console.log('App mounted');
    }, [])

    return /*#__PURE__*/React.createElement("div", null, "From React With Love!");
}

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));