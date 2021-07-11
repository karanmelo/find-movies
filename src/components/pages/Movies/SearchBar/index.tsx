import { ChangeEvent, useState } from 'react';

import { useDebounce } from '../hooks/useDebounce';

import { Input } from './styles';

interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<InputProps> = ({ value, onChange }) => {
  const [search, setSearch] = useState(value);
  const debouncedChange = useDebounce(onChange, 2000);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <Input
      type="search"
      placeholder="Busque um filme por nome ou gênero..."
      value={search}
      onChange={handleChange}
    />
  );
}

export default SearchBar;