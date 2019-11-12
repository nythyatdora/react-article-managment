import { actionType } from './actionType';
import CogoToast from 'cogo-toast';

export const getArticle = () => {
    return (dispatch) => {
        fetch('http://www.api-ams.me/v1/api/articles?page=1&limit=10', {
            headers: {
                "Authorization": 'Basic QU1TQVBJQURNSU46QU1TQVBJUEBTU1dPUkQ=',
                "content-type": "application/json;charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(res => {
                dispatch(
                    {
                        type: actionType.GET_ARTICLE,
                        payload: res.DATA,
                    }
                );
            }).catch(error => {
                CogoToast.error('server is not responding...',
                    {
                        position: 'bottom-right',
                    }
                );
            });
    }
};

export const deleteArticle = (id) => {
    return (dispatch) => {
        fetch(`http://www.api-ams.me/v1/api/articles/${id}`, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json;charset=UTF-8",
            }
        })
            .then(res => {
                let { status } = res;
                if (status === 200) {
                    CogoToast.loading('waiting for response...', {
                        position: 'bottom-right',
                    })
                        .then(() => {
                            CogoToast.success('selected item has been deleted!',
                                {
                                    position: 'bottom-right',
                                }
                            );
                        });

                    dispatch(
                        {
                            type: actionType.DELETE_ARTICLE,
                        }
                    );
                }
                else {
                    CogoToast.error('something is wrong!',
                        {
                            position: 'bottom-right',
                        }
                    );
                }
            });
    }
};