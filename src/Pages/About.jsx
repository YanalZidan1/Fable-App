//components
import HeaderAnyPage from "../Components/HeaderAnyPage";
import OurStory from "../Components/OurStory";
import Scroll_Images from "../Components/Scroll_Images";

function About() {
    return (
        <div className="About container-fluid p-0">
            <HeaderAnyPage
                title="True Passion"
                subtitle="Natural Flavours"
                background={require("../assets/images/bg0.jpg")}
                text="Opened in February 2016, La Cuisine is the largest restaurants in London."
                text2=" A bustling atmospheric restaurant, with a huge open kitchen."
            />
            <div className="Chefs">
                <OurStory
                    title="Discover"
                    subtitle="Best Recipes"
                    text="Curabitur quas nets lacus ets nulat iaculis loremis etis nisle varius vitae seditum fugiatum ligula aliquam qui sequi. Lorem ipsum dolor sit amet, consectetur adipiscing elit rutrum eleif arcu sit aspernatur nets fugit, sed quia."
                    link={'#'}
                    link_name={'OUR Recipes'}
                    images={[
                        require("../assets/images/a15.jpg"),
                    ]}
                />
                <Scroll_Images />
            </div>
        </div>
    )
}
export default About;