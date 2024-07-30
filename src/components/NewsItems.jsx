// import React, { useState, useEffect } from 'react';
// import NewsCards from './NewsCards';
// import Category from './Category';


// function NewsItems({ category, setCategory ,country,isLoggedIn,setIsLoggedIn}) {
//     const [articles, setArticles] = useState([]);
//     const [pageNumber, setPageNumber] = useState(1);
//     const apiKey = import.meta.env.VITE_API_KEY;
   
    
//     const resultNews = async () => {
//         try {
           

//             const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${pageNumber}`;
//             const data = await fetch(url);
//             const parsedData = await data.json();
//             setArticles(parsedData.articles);
//         } catch (error) {
//             console.error("Error fetching news:", error);
//         }
//     };

//     useEffect(() => {
//         resultNews();
//     }, [category, pageNumber,country]);
    
//     const pagePreviousHandler = () => {
//         if (pageNumber > 1) {
//             setPageNumber(pageNumber - 1);
//         }
//     };

//     const pageNextHandler = async () => {
//         const nextPageNumber = pageNumber + 1;
//         try {
//             const apiKey = import.meta.env.REACT_APP_API_KEY;

//             const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPageNumber}`;
//             const data = await fetch(url);
//             const parsedData = await data.json();
//             setArticles(parsedData.articles);
//             setPageNumber(nextPageNumber);
//         } catch (error) {
//             console.error("Error fetching next page:", error);
//         }
//     };

//     return (
//         <>
//             <Category setCategory={setCategory} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
//             <h3 className='text-center ' style={{ wordSpacing: '.5rem' ,marginTop:'5rem'}}>NewziFy - Top Headlines Of The Day</h3>
//             <div style={{ margin: '3rem', padding: '.5rem' }}>
//                 <div className="row">
//                     {articles.map((element) => (
//                         <div className='col-md-3 mb-3' key={element.url}>
//                             <NewsCards
//                                 imageUrl={element.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIuFW7NeWsGsABRfHpMPTYnrIgZcPVCuPOA&usqp=CAU'}
//                                 title={element.title}
//                                 newsUrl={element.url}
//                                 sourceName={element.source.name}
//                                 description={element.description}
//                                 authorName={element.author || 'Anonymous'}
//                                 publishedAt={element.publishedAt}
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 <div className="container  d-flex justify-content-between">
//                     <button disabled={pageNumber === 1} className="btn btn-outline-dark" onClick={pagePreviousHandler}>&larr; Previous</button>
//                     <button className="btn btn-outline-dark" onClick={pageNextHandler}>Next &rarr;</button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default NewsItems;
import React, { useState, useEffect } from 'react';
import NewsCards from './NewsCards';
import Category from './Category';

function NewsItems({ category, setCategory, country, isLoggedIn, setIsLoggedIn }) {
    const [articles, setArticles] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const apiKey = import.meta.env.VITE_API_KEY;

    const resultNews = async () => {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${pageNumber}`;
            const data = await fetch(url);
            const parsedData = await data.json();
            console.log("Parsed data:", parsedData);
            
            if (parsedData.articles && parsedData.articles.length > 0) {
                setArticles(parsedData.articles);
            } else {
                console.log("No articles found in the response.");
            }
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };
    

    useEffect(() => {
        resultNews();
    }, [category, pageNumber, country]);

    const pagePreviousHandler = () => {
        if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    const pageNextHandler = async () => {
        const nextPageNumber = pageNumber + 1;
        try {
            const apiKey = import.meta.env.REACT_APP_API_KEY;
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPageNumber}`;
            const data = await fetch(url);
            const parsedData = await data.json();
            setArticles(parsedData.articles);
            setPageNumber(nextPageNumber);
        } catch (error) {
            console.error("Error fetching next page:", error);
        }
    };

    return (
        <>
            <Category setCategory={setCategory} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            <h3 className='text-center ' style={{ wordSpacing: '.5rem', marginTop: '5rem' }}>NewziFy - Top Headlines Of The Day</h3>
            <div style={{ margin: '3rem', padding: '.5rem' }}>
                {articles.length > 0 ? (
                    <>
                        <div className="row">
                            {articles.map((element) => (
                                <div className='col-md-3 mb-3' key={element.url}>
                                    <NewsCards
                                        imageUrl={element.urlToImage || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrIuFW7NeWsGsABRfHpMPTYnrIgZcPVCuPOA&usqp=CAU'}
                                        title={element.title}
                                        newsUrl={element.url}
                                        sourceName={element.source.name}
                                        description={element.description}
                                        authorName={element.author || 'Anonymous'}
                                        publishedAt={element.publishedAt}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="container d-flex justify-content-between">
                            <button disabled={pageNumber === 1} className="btn btn-outline-dark" onClick={pagePreviousHandler}>&larr; Previous</button>
                            <button className="btn btn-outline-dark" onClick={pageNextHandler}>Next &rarr;</button>
                        </div>
                    </>
                ) : (
                    <div className="text-center text-danger">No articles available because API key is not purchased by the developer.</div>
                )}
            </div>
        </>
    );
}

export default NewsItems;
