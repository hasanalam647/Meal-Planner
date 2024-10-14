import React, { useEffect, useState } from 'react'
import './AllMeals.css'
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setRecipe } from '../../store/slices/recipeSlice';
import Cards from '../Cards/Cards';
import MyVerticallyCenteredModal from '../popup/popup'
import { deleteItemWeek1 } from '../../store/slices/week1saveSlice';
import { deleteItemWeek2 } from '../../store/slices/week2saveSlice';
import { deleteItemWeek4 } from '../../store/slices/week4saveSlice';
import { deleteItemWeek3 } from '../../store/slices/week3saveSlice';
import {recipeAPI} from '../../API'
const AllMeals = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [binShow, setBinShow] = useState(false);
  const [displayItems, setDisplayItems] = useState([])
  const options = ['All Meals', 'Week 1', 'Week 2', 'Week 3', 'Week 4'];
  const dispatch = useDispatch()
  const Data = useSelector((state) => { return state.recipies })
  const selectedItems = useSelector((state) => { return state.week })
  const week1 = useSelector((state) => { return state.week1save })
  const week2 = useSelector((state) => { return state.week2save })
  const week3 = useSelector((state) => { return state.week3save })
  const week4 = useSelector((state) => { return state.week4save })
  const url = recipeAPI;

  const getData = async () => {
    await fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(setRecipe(data.recipes))
        setDisplayItems(data.recipes)
      })
      .catch((err) => console.log('An Error Occured at data Fetching', err))
  }

  useEffect(() => {
    if (Data.length === 0) {
      getData()
    }
  }, [Data])

  const handleMenu = (index) => {
    setActiveIndex(index)
    if (index === 0) {
      setDisplayItems(Data)
      setBinShow(false)
    } else if (index === 1) {
      setDisplayItems(week1)
      setBinShow(true)
    } else if (index === 2) {
      setBinShow(true)
      setDisplayItems(week2)
    } else if (index === 3) {
      setBinShow(true)
      setDisplayItems(week3)
    } else if (index === 4) {
      setBinShow(true)
      setDisplayItems(week4)
    }
  }
  const handleDelete = (item) => {
    if (activeIndex === 1) {
      dispatch(deleteItemWeek1(item.id))
      const items = week1.filter((i) => i.id !== item.id)
      setDisplayItems(items)
    } else if (activeIndex === 2) {
      dispatch(deleteItemWeek2(item.id))
      const items = week2.filter((i) => i.id !== item.id)
      setDisplayItems(items)
    } else if (activeIndex === 3) {
      dispatch(deleteItemWeek3(item.id))
      const items = week3.filter((i) => i.id !== item.id)
      setDisplayItems(items)
    } else if (activeIndex === 4) {
      dispatch(deleteItemWeek4(item.id))
      const items = week4.filter((i) => i.id !== item.id)
      setDisplayItems(items)
    }
  }

  return (
    <>
      <div className='container_3 py-3'>
        <div className='container_3_sub'>
          <ul className='list_style'>
            {options.map((option, index) => (
              <li
                key={index}
                className={index === activeIndex ? 'active tab' : 'tab'}
                onClick={() => handleMenu(index)}
              >
                {option}
              </li>
            ))}
            <li>
              <button disabled={selectedItems.length === 0 ? true : false} className={selectedItems.length === 0 ? 'btn_week bg-secondary' : 'btn_week'} onClick={() => {
                setModalShow(true)
              }}>Add To Week</button>
            </li>
          </ul>
        </div>
      </div>
      <Container fluid='xxl' className='container_4'>
        {displayItems.length !== 0 ?
          <Row className='row row-cols-1 row-cols-md-3'>
            <Cards
              Data={displayItems}
              activeIndex={activeIndex}
              binShow={binShow}
              handleDelete={handleDelete} />
          </Row>
          :
          <h1 style={{ color: "lightgrey", height: '400px', textAlign: 'center' }}>There isn't a plan for this week</h1>
        }
      </Container>
      <MyVerticallyCenteredModal
        show={modalShow}
        week1={week1}
        week2={week2}
        week3={week3}
        week4={week4}
        onHide={() => setModalShow(false)}
      />

    </>
  )
}

export default AllMeals