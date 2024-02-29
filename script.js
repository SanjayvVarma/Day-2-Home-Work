const h1 = React.createElement("h1", { id: "h2-root" }, "Topics covered");

const p1 = React.createElement("p", {className: "p1"}, ' The following is a list of all the topics we cover in the MDN learning area. ');

const a1 = React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started ' }, ' Getting started with the web ');

const p2 = React.createElement("p", {}, ' Provides a practical introduction to web development for complete beginners. ');

const div1 = React.createElement("div", {className:"div1"}, a1, p2);

const a2 = React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started ' }, ' HTML - Structuring the web ');

const p3 = React.createElement("p", {}, ' HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail. ');

const div2 = React.createElement("div", {className:"div2"}, a2, p3);

const a3 = React.createElement("a", { href: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started ' }, ' CSS - Styling the web ');

const p4 = React.createElement("p", {}, " CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS. ");

const div3 = React.createElement("div", {className:"div3"}, a3, p4);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    React.createElement("div", {}, h1, p1, div1, div2, div3)
);