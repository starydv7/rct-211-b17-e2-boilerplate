import React,{useEffect} from "react";
import Filter from "../Components/Filter";
import { getShoes } from "../Redux/AppReducer/action";
import { useDispatch,useSelector } from "react-redux/es/exports";
import SingleShoe from "./SingleShoe";
import ShoeCard from "../Components/ShoeCard";
import styled from "styled-components";
const Shoes = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.shoes);
  useEffect(() => {
    dispatch(getShoes());
  }, []);
  console.log(shoes);
  return (
    <div>
     
      <Filter />
      <div className="grid">
          {/* Map through the shoes list here using ShoeCard Component */}
           {shoes.length > 0 && shoes.map((singleshoe) => {
              return (
                <BookListWrapper key={singleshoe.id} >
                
                    <ShoeCard shoes={singleshoe} />
                    
                 </BookListWrapper>      
          )
      })}
        </div>
         
    </div>
  );
};

export default Shoes;

const BookCardWrapper = styled.div`
border:1px solid blue;
padding:5px;
width:370px;

`
const BookPageWrapper = styled.div`
display:flex;
`
const FilterSortWrapper = styled.div`
width:300px;
border:1px solid red;
`

const BookListWrapper = styled.div`
border:1px solid black;
width:100%;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(310px,max-content));
grid-gap:16px;
justify-content:center;
padding:initial;
`