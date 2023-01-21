import React, { useState } from 'react';
import { Container, Search } from 'semantic-ui-react';

import { useAppDispatch } from '../../hooks/store';

interface ISearchInputProps {
  handleSearchFn: (value: string) => void;
  placeholder: string;
  setLoadingFn: (set: boolean) => any;
}

const SearchInput = ({ handleSearchFn, placeholder, setLoadingFn }: ISearchInputProps) => {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>('');

  const handleSearchChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setValue(target.value);
    dispatch(setLoadingFn(true));
    handleSearchFn(target.value);
  };

  return (
    <Container>
      <Search
        aligned='right'
        onSearchChange={handleSearchChange}
        placeholder={placeholder}
        showNoResults={false}
        defaultValue={value}
      />
    </Container>
  );
};

export default SearchInput;
