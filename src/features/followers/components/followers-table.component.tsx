import * as React from 'react';
import {ScrollView, View} from 'react-native';
import {DataTable} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FollowersContext} from '../../../services/followers/followers.context';
import styled from 'styled-components/native';
import {ActivityIndicator, MD2Colors} from 'react-native-paper';
const DataWrapper = styled.View`
  flex: 1;
  width: 450px;
`;
const LoadingWrapper = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;
const Loading = styled(ActivityIndicator)`
  padding: 100px;
`;
const IconButton = styled.TouchableOpacity``;
export const FollowersTable = ({}) => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const {followers, isLoading} = React.useContext(FollowersContext);
  const followersCount = followers?.length ?? 0;
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, followersCount);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView>
      <DataTable>
        <ScrollView horizontal>
          <DataWrapper>
            <DataTable.Header>
              <DataTable.Title>
                <Icon name="heart" size={20} />
              </DataTable.Title>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title numeric>Gender</DataTable.Title>
              <DataTable.Title numeric>Birth Year</DataTable.Title>
            </DataTable.Header>
            {isLoading || !followers?.length || !followers ? (
              <LoadingWrapper>
                <Loading style={{padding: 100}} size={50} animating={true} />
              </LoadingWrapper>
            ) : (
              followers?.slice(from, to).map(item => (
                <DataTable.Row key={item.id}>
                  <DataTable.Cell>
                    <IconButton>
                      <Icon name="heart" size={20} />
                    </IconButton>
                  </DataTable.Cell>
                  <DataTable.Cell
                    style={{justifyContent: 'flex-start'}}
                    textStyle={{textAlign: 'right'}}>
                    {item.name}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'flex-end'}}>
                    {item.gender}
                  </DataTable.Cell>
                  <DataTable.Cell style={{justifyContent: 'flex-end'}}>
                    {item.birthYear}
                  </DataTable.Cell>
                </DataTable.Row>
              ))
            )}
          </DataWrapper>
        </ScrollView>

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(followersCount / itemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${followersCount}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </ScrollView>
  );
};
