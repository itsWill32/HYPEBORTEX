import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import GlobalButton from "../button/Button";
import TuneIcon from "@mui/icons-material/Tune";
import "./FilterItems.css";
import Box from "@mui/material/Box";
import FilterCategories from './filterCategories/FilterCategories';
import FilterMarcas from './filterMarcas/filterMarcas';
import FilterTalla from './filterTallas/FilterTallas';
import FilterColor from './filterColor/FilterColor';
import FilterPrice from "./filterPrice/FilterPrice";

export default function FilterItems() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="main-filters">
      <GlobalButton
        onClickButton={toggleDrawer(true)}
        content={"Filtros"}
        icon={<TuneIcon />}
        customClassButton={"button-Filter"}
      />

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box width={250} >
          <h2>Todos los filtros</h2>
          <div className="container-filters">
            <FilterCategories customClassCategories={'categories'} />
            <FilterMarcas customClassMarcas={'marcas'} />
            <FilterTalla customClassTallas={'tallas'} />
            <FilterColor customClassColor={'color'} />
          </div>

          <div>
            
          </div>
        </Box>
      </Drawer>

    <div>
      <FilterPrice />
    </div>
    </div>
  );
}
