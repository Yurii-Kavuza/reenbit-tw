import { Form, Icon, Input, SearchContainer } from './SearchBar.styled';

export const SearchBar = ({ value, onChange }) => {
  return (
    <Form>
      <SearchContainer>
        <Input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Filter by name..."
        />
        <Icon src="/reenbit-tw/images/svg/searchIcon.svg" alt="Search icon" />
      </SearchContainer>
    </Form>
  );
};
