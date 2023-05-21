import React, { useState, useEffect } from "react";

const USER_KEY = 'user';

export const DataContext = React.createContext(); 

export const DataProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem(USER_KEY) ? JSON.parse(localStorage.getItem(USER_KEY)) : null);

    const [mealType, setMealType] = useState('');

    const [mealsInBasket, setMealsInBasket] = useState([]);

    const [activeElements, setActiveElements] = useState([]);

    const [scrollTopRef, setScrollTopRef] = useState(null);  

    const addMealToBasket = ({id, basketIcon:image, title, description, price }) => {
        const meal = {
            id,
            image,
            title,
            description,
            price,
            amount: 1
        }

        setMealsInBasket(prev => [...prev, meal ]);
    };

    const removeMealFromBasket = (id) => {
        setMealsInBasket(mealsInBasket.filter((item) => item.id !== id));
        setActiveElements(activeElements.filter((itemId) => itemId !== id));
    };

    const increaseAmount = (id) => {
        setMealsInBasket(prev => prev.map((item) => {
            if(item.id === id){
                return {
                    ...item,
                    amount: item.amount + 1
                }   
            }
            return item;
        }));
    };

    const decreaseAmount = (id) => {
        setMealsInBasket(prev => prev.map((item) => {
            if(item.id === id){
                if(item.amount > 1){
                    return {
                        ...item,
                        amount: item.amount - 1
                    } 
                }else{      
                    removeMealFromBasket(id);
                }
            }
            return item;
        }));
    };

    const scrollToComponentTop = () => {
        scrollTopRef.current.scrollTop = 0;
    };

    useEffect(() => {
        localStorage.setItem(USER_KEY, JSON.stringify(currentUser))
    }, [currentUser])

    return <DataContext.Provider
        value={{
            currentUser,
            setCurrentUser,
            mealType,
            setMealType,
            mealsInBasket,
            setMealsInBasket,
            addMealToBasket,
            removeMealFromBasket,
            increaseAmount,
            decreaseAmount,
            activeElements,
            setActiveElements,
            scrollToComponentTop,
            setScrollTopRef,
        }}
    >
        {children}
    </DataContext.Provider>
}