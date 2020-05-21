import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";//npm install uuid
import connection from './API/Connection';
import Recipe from './Recipe';
import Alert from './Alert';
const App = () => {

    const [query, setQuery] = useState("");//Value of SearchBox
    const [recipes, setRecipes] = useState([]);//All Recepies array according search value
    const [alert, setAlert] = useState("");
    //const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
    const APP_ID = "4e9f05eb";
    const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";
    const url = `/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    //Feach data using searchbar from edamam api
    const getData = async () => {
        if (query !== "") {
            const result = await connection.get(url);
            //more property with Boolean value in result data  shows true if search item is availabe in data
            if (!result.data.more) {
                return setAlert("No food with such name");
            }
            else {
                console.log(result);
                setQuery("");//Clear value of queary

                setAlert("");//clear data of error
                setRecipes(result.data.hits);//Get All Recepies array according search value stored in queary
            }
        }
        else {
            setAlert("Please fill the form");
        }
    }

    //Search for data
    const onSubmit = (e) => {
        e.preventDefault();
        getData();
    }

    //Change state value of queary
    const onChange = e => {
        setQuery(e.target.value);
    }

    return (
        <div className="App">
            <h1 >Search For Food Items</h1>

            <form className="search-form" onSubmit={onSubmit}>
                    {/* If no text isthere will call Alert */}
                    {alert !== "" && <Alert alert={alert} />}
                    <input
                        type="text"
                        name="query"
                        autoComplete="off"
                        placeholder="Search Food"
                        onChange={onChange}
                        value={query}

                    />
                    <input
                        type="submit"
                        value="Search"
                    />
            </form>
            <div className="recipes">
                {/* Check Recepies array is Empty or Not */}
                {recipes !== [] &&
                    recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
                {/* Will generate unique id for each recepie ina list */}
            </div>

        </div>
    );
}
export default App;