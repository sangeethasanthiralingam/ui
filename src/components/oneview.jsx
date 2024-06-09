import { Component } from "react";
import './oneV.css';
import imageBig from '../images/imagebig.png';
import imageOne from '../images/imageOne.png';
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

class oneView extends Component {
    render() {
        return (
            <div>
                {/* <header className="one-view-header">
                    <h1 className="h1-title">One View Page</h1>
                </header> */}
                <div className="container-large-1">
                    <div className="container-large-2">
                        <p className="path">
                            Home/Catalog/Armchairs
                        </p>
                    </div>
                    <div className="divide-box">
                        <div className="divide-box-1">
                            <div className="pic-big">
                                <img className="big-pic" src={imageBig} alt="sofa" />
                            </div>
                            <div className="pic-three">
                                <div >
                                    <img className="pic-one" src={imageOne} alt="sofa" />
                                </div>
                                <div >
                                    <img className="pic-one" src={imageOne} alt="sofa" />
                                </div>
                                <div >
                                    <img className="pic-one" src={imageOne} alt="sofa">
                                    </img>
                                </div>
                            </div>
                        </div>
                        <div className="divide-box-2">
                            <div className="one-c">
                                <p className="p-1">Crown</p>
                            </div>
                            <div className="one">
                                <p className="p-2">Armchairs</p>
                            </div>
                            <div className="one">
                                <p className="p-1">$ 283, 74</p>
                            </div>
                            <div className="one">
                                <p className="p-3">Information</p>
                            </div>
                            <div className="one">
                                <p className="p-5">
                                    The image is wrapped in a div element.<br />
                                    The display property is set to "flex" and justify-content property to "center."<br />
                                    The width of the image is then set to a fixed length value                                    </p>
                            </div>
                            <div className="one-review">
                                <div className="review-stars">
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarSharp />
                                    <IoStarOutline />
                                </div>
                                <div className="review-text">
                                    <p className="p-r">10 reviews</p>
                                </div>
                            </div>   <div className="one">
                                <p className="p-6"><b>Color: </b> Green</p>
                            </div>
                            <div className="three-box">
                                <div className="box-color-1" >
                                    
                                </div>
                                <div className="box-color-2">
                                    
                                </div>
                                <div className="box-color-3">
                                    
                                </div>
                            </div>
                            <div className="one-add">
                                <button className="add-to-cart">
                                    <p className="text">
                                        Add to cart
                                    </p>
                                </button>
                            </div>
                            <div className="one-add">
                                <button className="add-to-cart-w">
                                    <p className="text-b">
                                        Add to Favourites <FaRegHeart/>
                                    </p>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default oneView;


{/* <div className="container-large-2">
box
<div className="container-large-3">
    box
    <div className="container-large-4">
        <div className="container-large-5">
            <img src="/oneview.jpg"/>
        </div>
        <div className="container-large-6">
            pics
        </div>
    </div>
    <div className="container-large-4">
        <div className="container-large-2">
            crown
        </div>
        <div className="container-large-2">
            armchairs
        </div>
        <div className="container-large-2">

        </div>
        <div className="container-large-2">
            price
        </div>
        <div className="container-large-2">
            information
        </div>
        <div className="container-large-2">
            paragraph
        </div>
        <div className="container-large-2">

        </div>
        <div className="container-large-2">
            <div className="container-large-2">
                star
            </div><div className="container-large-2">
                reviews
            </div>
        </div>
        <div className="container-large-2">
            color
        </div>
        <div className="container-large-2">
            <div className="container-large-2">
                box
            </div><div className="container-large-2">
                box
            </div><div className="container-large-2">
                box
            </div>

        </div>
        <div className="container-large-2">
            add to card
        </div>
        <div className="container-large-2">
            add to favourite
        </div>
    </div>
</div>
</div> */}