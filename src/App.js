import React from "react";
import HTMLFlipBook from "react-pageflip";
import './index.css'
import './index.scss'

const Page = React.forwardRef((props, ref) => {
    return (
        <div className={"page"} ref={ref}>
            <div className={"page-content"}>
                <h2 className={"page-header"}>Page header - {props.number}</h2>
                <div className={"page-image"}/>
                <div className={"page-text"}>{props.children}</div>
                <div className={"page-footer"}>{props.number + 1}</div>
            </div>
        </div>
    );
});

const PageCover = React.forwardRef(((props, ref) => {
    return (
        <div className={"page page-cover"} ref={ref} data-density="hard">
            <div className={"page-content"}>
                <h2>{props.children}</h2>
            </div>
        </div>
    );
}));

function App(props) {
    let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna. Aliquam ac nulla rhoncus, accumsan eros sed, viverra enim. Pellentesque non justo vel nibh sollicitudin pharetra suscipit ut ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cursus mollis nibh, non convallis ex convallis eu. Suspendisse potenti. Aenean vitae pellentesque erat. Integer non tristique quam. Suspendisse rutrum, augue ac sollicitudin mollis, eros velit viverra metus, a venenatis tellus tellus id magna.";
    return (
        <div className="paddingAll">
                <div className="flip-book">
                    <HTMLFlipBook width={550}
                                  height={500}
                                  size="stretch"
                                  minWidth={315}
                                  maxWidth={1000}
                                  minHeight={400}
                                  maxHeight={1533}
                                  maxShadowOpacity={0.7}
                                  showCover={true}
                                  mobileScrollSupport={true}>
                        <PageCover>BOOK TITLE</PageCover>
                        <Page header="header 1" number={1} children={text}></Page>
                        <Page header="header 12" number={2} children={text}></Page>
                        <Page header="header 13" number={3} children={text}></Page>
                        <Page header="header 14" number={4} children={text}></Page>
                        <Page header="header 14" number={5} children={text}></Page>
                        <Page header="header 14" number={6} children={text}></Page>
                        <Page header="header 14" number={7} children={text}></Page>
                        <Page header="header 14" number={8} children={text}></Page>
                        <PageCover>THE END</PageCover>
                    </HTMLFlipBook>
                </div>
        </div>
    );
}

export default App;
