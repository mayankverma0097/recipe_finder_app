import React, { useState } from 'react';
import "./Recipes.css";
import AskAi from '../Utils/AskAi.js';

export default function Recipes() {
    const [recipe, setRecipe] = useState(null); // Changed from [] to null
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSubmit(e) {    
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        try {
            let Res = await AskAi(e.target[0].value);
            console.log(Res);
            setRecipe(Res);
        } catch (err) {
            setError('Failed to generate recipe');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="recipes-container">
            <div className="recipes-header">
                <h1 className="recipes-title">Find Your Perfect Recipe</h1>
                <p className="recipes-subtitle">
                    Enter a dish name and let AI generate step-by-step cooking instructions
                </p>
            </div>

            <form onSubmit={handleSubmit} className="recipe-search-form">
                <div className="search-box">
                    <input 
                        type="text" 
                        placeholder="Enter dish name (e.g., Biryani, Pasta, Burger)" 
                        className="search-input"
                        required
                        disabled={loading}
                    />
                    <button type="submit" className="search-button" disabled={loading}>
                        <span className="button-icon">{loading ? '⏳' : '🔍'}</span>
                        <span className="button-text">
                            {loading ? 'Generating...' : 'Generate Recipe'}
                        </span>
                    </button>
                </div>
            </form>

            {error && (
                <div className="error-message">
                    <p>❌ {error}</p>
                </div>
            )}

            {/* Display Recipe Data */}
            {recipe && (
                <div className="recipe-display">
                    {/* Recipe Header */}
                    <div className="recipe-header-card">
                        <h2 className="recipe-name">{recipe.recipe_name}</h2>
                        
                        <div className="recipe-meta-grid">
                            <div className="meta-card">
                                <span className="meta-icon">⏱️</span>
                                <div className="meta-content">
                                    <p className="meta-label">Prep Time</p>
                                    <p className="meta-value">{recipe.prep_time}</p>
                                </div>
                            </div>
                            <div className="meta-card">
                                <span className="meta-icon">🍳</span>
                                <div className="meta-content">
                                    <p className="meta-label">Cook Time</p>
                                    <p className="meta-value">{recipe.cook_time}</p>
                                </div>
                            </div>
                            <div className="meta-card">
                                <span className="meta-icon">👥</span>
                                <div className="meta-content">
                                    <p className="meta-label">Servings</p>
                                    <p className="meta-value">{recipe.servings}</p>
                                </div>
                            </div>
                            <div className="meta-card">
                                <span className="meta-icon">📊</span>
                                <div className="meta-content">
                                    <p className="meta-label">Difficulty</p>
                                    <p className="meta-value">{recipe.difficulty}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Ingredients - Using map() */}
                    <div className="recipe-section">
                        <h3 className="section-title">
                            <span className="title-icon">🥘</span>
                            Ingredients
                        </h3>
                        <div className="ingredients-grid">
                            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                                <div key={index} className="ingredient-item">
                                    <span className="ingredient-bullet">✓</span>
                                    <div className="ingredient-text">
                                        <span className="ingredient-name">{ingredient.name}</span>
                                        <span className="ingredient-quantity">{ingredient.quantity}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions - Using map() */}
                    <div className="recipe-section">
                        <h3 className="section-title">
                            <span className="title-icon">👨‍🍳</span>
                            Cooking Instructions
                        </h3>
                        <div className="instructions-list">
                            {recipe.instructions && recipe.instructions.map((step, index) => (
                                <div key={index} className="instruction-step">
                                    <div className="step-number">{index + 1}</div>
                                    <p className="step-text">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tips - Using map() */}
                    {recipe.tips && recipe.tips.length > 0 && (
                        <div className="recipe-section">
                            <h3 className="section-title">
                                <span className="title-icon">💡</span>
                                Pro Tips
                            </h3>
                            <div className="tips-grid">
                                {recipe.tips.map((tip, index) => (
                                    <div key={index} className="tip-card">
                                        <span className="tip-icon">💡</span>
                                        <p className="tip-text">{tip}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Popular Searches */}
            <div className="popular-searches">
                <span className="popular-label">Popular:</span>
                <button className="tag" type="button" onClick={() => {
                    document.querySelector('.search-input').value = 'Biryani';
                }}>Biryani</button>
                <button className="tag" type="button" onClick={() => {
                    document.querySelector('.search-input').value = 'Pizza';
                }}>Pizza</button>
                <button className="tag" type="button" onClick={() => {
                    document.querySelector('.search-input').value = 'Pasta';
                }}>Pasta</button>
                <button className="tag" type="button" onClick={() => {
                    document.querySelector('.search-input').value = 'Curry';
                }}>Curry</button>
            </div>
        </div>
    );
}
