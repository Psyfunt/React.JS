import { useDispatch, useSelector } from "react-redux";

import {getArticles} from "../../Store/Articles/actions";
import {useCallback, useEffect} from "react";
import {selectArticlesError, selectArticlesList, selectArticlesLoading} from "../../Store/Articles/selectors";
import {CircularProgress} from "@mui/material";


export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticlesList);
    const isLoading = useSelector(selectArticlesLoading);
    const error = useSelector(selectArticlesError);

    const requestArticles = useCallback( async () => {
        dispatch(getArticles());
    },[dispatch]);
    useEffect(() => {
        requestArticles();
    }, [requestArticles]);

    return (
        <>
            <h3>Articles</h3>
                {isLoading ? (
                        <CircularProgress />
                    ) : (
                        <>
                            <button onClick={requestArticles}>REQUEST</button>
                            {error && <h4>ERRROR</h4>}
                            {!!error && <h4>ERRROR: {error}</h4>}
                            <ul>
                                {articles.map((art) => (
                                    <li key={art.id}>{art.title}</li>
                                ))}
                            </ul>
                        </>
                    )
                }
        </>
    );
}