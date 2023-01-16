const ListItem = (props) => {
  const handleChecked = () => {
    props.handleChecked(props.id);
  };

  return (
    <li className="listItem">
      <input type="checkbox" value={props.id} onChange={handleChecked} />
      <span className={props.checked ? "checked" : ""}>{props.name}</span>
    </li>
  );
};

export default ListItem;
