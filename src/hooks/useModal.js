const { useState, useEffect } = require('react');

const useModal = (getItemById) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const showModal = (coffeeId) => {
    setSelected(coffeeId);
    setIsVisible(true);
  };

  const hideModal = () => {
    setSelected(null);
    setSelectedItem(null);
    setIsVisible(false);
  };

  useEffect(() => {
    if (selected) {
      const item = getItemById(selected);
      setSelectedItem(item);
    }
  }, [selected]);

  return [isVisible, selectedItem, showModal, hideModal];
};

export default useModal;
