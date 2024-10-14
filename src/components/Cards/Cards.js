import React, { useEffect, useState } from 'react';
import './Card.css';
import { Card, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addWeek, deleteWeekItem } from '../../store/slices/weekSlice';
import { faStar, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cards = ({ Data, binShow, handleDelete }) => {
    const [activeCards, setActiveCards] = useState([]);
    const dispatch = useDispatch()
    const dataCheck = useSelector((state) => state.week)
    useEffect(() => {
        if (dataCheck.length === 0) {
            setActiveCards([])
        }
    }, [dataCheck])
    const handleCardClick = (data) => {
        if (activeCards.includes(data.id)) {
            setActiveCards(activeCards.filter(cardId => cardId !== data.id));
            dispatch(deleteWeekItem(data.id))
        } else {
            setActiveCards([...activeCards, data.id]);
            dispatch(addWeek(data))
        }
    };

    return (
        <>
            {Data?.map((data) => {
                return (
                    <Col key={data.id}>
                        <Card
                            onClick={() =>  binShow ? '' : handleCardClick(data) }
                            className={`shadow-lg p-3 mb-5 bg-white rounded ${activeCards.includes(data.id) ? 'active_card' : ''}`}
                            style={{ maxHeight: '450px', border: '0px', width: '18rem', padding: '22px' }}
                        >
                            <div className="image-container" style={{ position: 'relative' }}>
                                {binShow ?
                                    <FontAwesomeIcon
                                        onClick={() => { handleDelete(data) }}
                                        className='trash_icon'
                                        icon={faTrashCan} />
                                    : ''}
                                <Card.Img variant="top" className='card_img' src={data.image} />
                                <p className='tag'>{data.mealType[0]}</p>
                            </div>
                            <Card.Body className='px-0 card_body'>
                                <Card.Title style={{ fontSize: '14px', fontWeight: '700' }}>{data.name}</Card.Title>
                                <Card.Text className='card_text'>
                                    {data.instructions}
                                </Card.Text>
                                <div className='d-flex justify-content-between card_end'>
                                    <div><b>Cuisine :</b>{data.cuisine}</div>
                                    <div><b>Rating :</b>{data.rating} <FontAwesomeIcon icon={faStar} /></div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </>
    );
};

export default Cards;
