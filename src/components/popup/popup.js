import { useState } from 'react';
import './popup.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addWeek1save, setWeek1save } from '../../store/slices/week1saveSlice';
import { addWeek2save, setWeek2save } from '../../store/slices/week2saveSlice';
import { addWeek3save, setWeek3save } from '../../store/slices/week3saveSlice';
import { addWeek4save, setWeek4save } from '../../store/slices/week4saveSlice';
import { clearWeekItems } from '../../store/slices/weekSlice';

export default function MyVerticallyCenteredModal(props) {
    const [items, setItems] = useState(0)
    const nums = [1, 2, 3, 4]
    const dispatch = useDispatch()
    const data = useSelector((state) => state.week)
    const [activeButton, setActiveButton] = useState(1);

    const handleButtonClick = (weekNumber) => {
        setActiveButton(weekNumber);
        setItems(weekNumber);
    };

    const handleSave = (props) => {
        props.onHide()
        if (data.length !== 0) {
            if (items === 1 || items === 0) {
                if (props.week1.length === 0) {
                    dispatch(setWeek1save(data))
                } else {
                    data.forEach(element => {
                        const checkForSameValues = props.week1.filter((f) => f.id === element.id)
                        if (checkForSameValues.length === 0) {
                            dispatch(addWeek1save(element))
                        }
                    });
                }
            } else if (items === 2) {
                if (props.week2.length === 0) {
                    dispatch(setWeek2save(data))
                } else {
                    data.forEach(element => {
                        const checkForSameValues = props.week2.filter((f) => f.id === element.id)
                        if (checkForSameValues.length === 0) {
                            dispatch(addWeek2save(element))
                        }
                    });
                }
            } else if (items === 3) {
                if (props.week3.length === 0) {
                    dispatch(setWeek3save(data))
                } else {
                    data.forEach(element => {
                        const checkForSameValues = props.week3.filter((f) => f.id === element.id)
                        if (checkForSameValues.length === 0) {
                            dispatch(addWeek3save(element))
                        }
                    });
                }
            } else if (items === 4) {
                if (props.week4.length === 0) {
                    dispatch(setWeek4save(data))
                } else {
                    data.forEach(element => {
                        const checkForSameValues = props.week4.filter((f) => f.id === element.id)
                        if (checkForSameValues.length === 0) {
                            dispatch(addWeek4save(element))
                        }
                    });
                }
            }
            dispatch(clearWeekItems())
        } else {
            alert('please select meal first')
        }
    }
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Select Week
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex justify-content-around'>
                    {nums.map((n) => <Button key={n}
                        className={`border-0 text-black bg-body-secondary ${activeButton === n ? 'week_btn_active' : 'week_btn'}`}
                        onClick={() => handleButtonClick(n)}
                    >
                        Week {n}
                    </Button>)}
                </div>
            </Modal.Body>
            <Modal.Footer className='justify-content-center'>
                <Button className='save_btn' onClick={() => { handleSave(props) }}>Save</Button>
            </Modal.Footer>
        </Modal >
    );
}
