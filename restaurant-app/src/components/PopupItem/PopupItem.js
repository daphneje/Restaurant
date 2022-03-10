import React from "react";

import { useParams } from "react-router-dom";

const PopUpItem = ({
  modal,
  modalClose,
  manageItemQuantity,
  addInstruction,
  product,
}) => {
  if (!modal) {
    return null;
  }

  return <button onClick={modalClose}> Press</button>;
};

export default PopUpItem;
