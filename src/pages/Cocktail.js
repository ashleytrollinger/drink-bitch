import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Cocktail.css';

function Cocktail() {
    const [randomCocktail, setRandomCocktail] = useState(null);
    const [selectedLiquor, setSelectedLiquor] = useState('');
    const [detailedDrinkInfo, setDetailedDrinkInfo] = useState(null); // To store detailed drink information

    // List of available alcohols
    const alcohols = ['vodka', 'gin', 'tequila', 'whiskey', 'rum', 'brandy'];

    // Function to fetch a random cocktail
    const fetchRandomCocktail = async () => {
        try {
            const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
            const data = await response.json();
            setRandomCocktail(data.drinks[0]);
            // Clear the selected liquor
            setSelectedLiquor('');
        } catch (error) {
            console.error('Error fetching random cocktail:', error);
        }
    };

    // Function to fetch detailed drink information by ID
    const fetchDetailedDrinkInfo = async (drinkId) => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`);
            const data = await response.json();
            if (data.drinks && data.drinks.length > 0) {
                setDetailedDrinkInfo(data.drinks[0]);
                // Clear the random cocktail
                setRandomCocktail(null);
            } else {
                // No detailed information found for the drink
                setDetailedDrinkInfo(null);
            }
        } catch (error) {
            console.error('Error fetching detailed drink information:', error);
        }
    };

    useEffect(() => {
        // Fetch detailed drink information when selectedLiquor changes
        if (selectedLiquor) {
            // Fetch the ID using selectedLiquor
            fetchRandomDrinkIdBySelectedLiquor(selectedLiquor);
        }
    }, [selectedLiquor]);

    // Function to fetch the ID of a random drink by selected liquor
    const fetchRandomDrinkIdBySelectedLiquor = async (liquor) => {
        try {
            const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${liquor}`);
            const data = await response.json();
            if (data.drinks && data.drinks.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.drinks.length);
                const randomDrinkId = data.drinks[randomIndex].idDrink;
                // Fetch detailed drink information using the obtained ID
                fetchDetailedDrinkInfo(randomDrinkId);
            } else {
                // No drinks found for the selected liquor
                setDetailedDrinkInfo(null);
            }
        } catch (error) {
            console.error('Error fetching random drink ID by selected liquor:', error);
        }
    };

    // Function to render instructions and ingredients
    const renderInstructionsAndIngredients = (cocktailData) => {
        if (!cocktailData) {
            return null;
        }

        // Create an array of ingredients and measures
        const ingredients = [];
        for (let i = 1; i <= 15; i++) {
            const ingredient = cocktailData[`strIngredient${i}`];
            const measure = cocktailData[`strMeasure${i}`];
            if (ingredient && measure) {
                ingredients.push(`${measure.trim()} ${ingredient.trim()}`);
            }
        }

        return (
            <div className='drink-info'>
                <img src={cocktailData.strDrinkThumb} alt={cocktailData.strDrink} />
                <div className='drink-txt'>
                    <h3>{cocktailData.strDrink}</h3>
                    <h4>Instructions:</h4>
                    <p>{cocktailData.strInstructions}</p>
                    <h4>Ingredients:</h4>
                    <ul>
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <div>
            <Header /> {/* Add the Header component */}
            <section className='cocktail'>
                <div className='button-and-dropdown'>
                    <button onClick={fetchRandomCocktail}>Generate Random Cocktail</button>
                    {randomCocktail && !selectedLiquor && (
                        <div>
                            {renderInstructionsAndIngredients(randomCocktail)}
                        </div>
                    )}
                    <h1>OR</h1>
                    <h2>Random Drink by Selected Liquor</h2>
                    <select onChange={(e) => setSelectedLiquor(e.target.value)}>
                        <option value="">Select Liquor</option>
                        {alcohols.map((alcohol) => (
                            <option key={alcohol} value={alcohol}>
                                {alcohol}
                            </option>
                        ))}
                    </select>
                </div>
                {detailedDrinkInfo && (
                    <div>
                        {renderInstructionsAndIngredients(detailedDrinkInfo)}
                    </div>
                )}
            </section >
            <section className='back-section'>
                <Link to='/'>
                    <button className='back'>←Back to Home</button>
                </Link>
            </section>
        </div>
    );
}

export default Cocktail;
