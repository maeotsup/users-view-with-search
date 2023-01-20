import React, { useState } from 'react';
import { Container, Search } from 'semantic-ui-react';

interface ISearchInputProps {
  handleSearchFn: (value: string) => void;
  loading: boolean;
}

const SearchInput = ({ handleSearchFn, loading }: ISearchInputProps) => {
  const [value, setValue] = useState<string>('');

  const handleSearchChange = (e: React.SyntheticEvent) => {
    let target = e.target as HTMLInputElement;
    setValue(target.value);
    handleSearchFn(target.value);
  };

  return (
    <Container>
      <Search
        aligned='right'
        loading={loading}
        onSearchChange={handleSearchChange}
        placeholder='Search...'
        results={[]}
        showNoResults={false}
        defaultValue={value}
      />
    </Container>
  );
};

export default SearchInput;