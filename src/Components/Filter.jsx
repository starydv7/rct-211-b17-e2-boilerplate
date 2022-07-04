import React,{useEffect,useState} from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getShoes } from "../Redux/AppReducer/action";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
   const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const urlCategory = searchParams.getAll('category');
    const urlSort = searchParams.get('sortBy');
    console.log(urlCategory, urlSort);
    const [category, setCategory] = useState(urlCategory || []);
    const [sortBy, setSortBy] = useState(urlSort || '');
   
   
    const handleCheck = (e) => {
        const option = e.target.value;
        //if option is already presnet then remove it or add t
        let newCategory = [...category];
        if (category.includes(option)) {
            //remove
            newCategory.splice(newCategory.indexOf(option), 1)
        }
        else {
            newCategory.push(option);
        }
        setCategory(newCategory);
    };
    const handleSort = (e) => {
        setSortBy(e.target.value);
    }
    useEffect(() => {
        if (category) {
            setSearchParams({category});
            dispatch(getShoes({params:{category}}))
        }
    }, [category, setSearchParams]);
    useEffect(() => {
        if (sortBy) {
            const params = {
                category: searchParams.getAll("category"),
                sortBy,
            }
            
            setSearchParams(params);
        }
    },[searchParams,setSearchParams,sortBy])
    console.log(sortBy);
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input type="checkbox"
            onChange={handleCheck}
            value="Sneakers"
            defaultChecked={category.includes("Sneakers")}
          
          
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox"
            onChange={handleCheck}
            value="Loafers"
            defaultChecked={category.includes("Loafers")}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox"
            onChange={handleCheck}
            value="Canvas"
          defaultChecked={category.includes("Canvas")}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox"
            onChange={handleCheck}
            value="Boots"
            defaultChecked={category.includes("Boots")}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
