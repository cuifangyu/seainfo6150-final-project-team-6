import React, {Component} from "react";
import styles from "../DetailPage/SaveButton.module.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submittedForm: null
        };
    }

    onSubmit = async e => {
        e.preventDefault();
        const data = new FormData(e.target);
        this.setState({submittedForm: data});
    };

    render() {
        return this.state.submittedForm ? (
            <div>
                <label htmlFor="entry">
                    <ins>Thank you for your Subscribe! You are all set.<br/>
                        And your form entry was
                    </ins>
                </label>
                <p>{this.state.submittedForm.get("name")}</p>
                <p> {this.state.submittedForm.get("email")}</p>
                <p> {this.state.submittedForm.get("tel")}</p>
            </div>
        ) : (
            <form onSubmit={this.onSubmit}>
                <p>
                    <label htmlFor="name">Name :</label><br/>
                    <input type="name" name="name" placeholder="Your Name.."/>
                </p>
                <p>
                    <label htmlFor="Email">Email :</label><br/>
                    <input required type="email" name="email" placeholder="Your Email.."/>
                </p>
                <p>
                    <label htmlFor="Phone"> SMS Text :</label><br/>
                    <input required type="tel" id="tel" name="tel" placeholder="Your Phone Number.."/>
                </p>
                <p>
                    <label htmlFor="want">Any other recipes do you want to know :   </label><br/>
                    <input type="text" name="text" placeholder="Any Recipes..."/>
                </p>
                <p>
                    <label htmlFor="comments">Anything we can improve :   </label><br/>
                    <textarea type="text" name="text" placeholder="Any Comments..."/>
                </p>
                <p>
                    <label htmlFor="recipeType">Choose recipe type you like most in Home Chef:   </label><br/>
                    <input type="radio" name="recipeType" value="Soup"/>
                    <label htmlFor="type1">Soup </label>
                    <input type="radio" name="recipeType" value="Appetizer"/>
                    <label htmlFor="type2">Appetizer </label>
                    <input type="radio" name="recipeType" value="MainCourse"/>
                    <label htmlFor="type3">Main Course </label>
                    <input type="radio" name="recipeType" value="Snack"/>
                    <label htmlFor="type4">Snack </label>
                    <input type="radio" name="recipeType" value="Dessert"/>
                    <label htmlFor="type5">Dessert </label>
                </p>
                <p>
                    <label htmlFor="reach"> How can we reach you best ?   </label><br/>
                    <select id="type" name="type">
                        <option value="Email">Email</option>
                        <option value="SMS">SMS</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="language">Language prefer :    </label><br/>
                    <select required id="language" name="language">
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="Chinese">Chinese</option>
                        <option value="French">French</option>
                        <option value="Russian">Russian</option>
                        <option value="Arabic">Arabic</option>
                    </select>
                </p>
                <p>
                    <input required type="radio" name="accept" value=""/>
                    <label htmlFor="accept">  I agree to receive message and updates from Home Chef.</label>
                </p>
                <p>
                    <input type="Submit" value="Send it"/>
                </p>
            </form>
        );
    }
}
