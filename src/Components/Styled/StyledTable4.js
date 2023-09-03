import { Box, Stack, styled } from '@mui/material';
import { Container, Draggable } from 'react-smooth-dnd';

const CustomTable = styled(Box)(() => ({
  borderRadius: '7px',
  background: '#fff',

  '& .custom-t-head-cell': {
    fontWeight: '600',
    fontSize: '14px',
    lineHeight: '17px',
    letterSpacing: '0.03em',
    color: '#737373',
  },

  '& .custom-t-row': {
    display: 'flex!important',
    flexDirection: 'row',

    '& > *': {
      flex: 1,
      paddingLeft: '24px',
      paddingRight: '24px',
      paddingTop: '16px',
      paddingBottom: '16px',
      borderBottom: '1px dashed #E4E6EF',
    },
  },

  '& .custom-t-cell': {
    flex: 1,
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '16px',
    paddingBottom: '16px',
    borderBottom: '1px dashed #E4E6EF',
  },

  '& .empty-msg': {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    color: '#737373',
  },
}));

export default function StyledTable4({ columns, rows, getRowKey, noRowsMessage, onDrop }) {
  return (
    <CustomTable>
      <Stack className="custom-t-row">
        {columns.map((column) => (
          <Stack
            key={column.id}
            direction="row"
            className="custom-t-head-cell custom-t-cell"
            sx={{
              flex: `${column.flex}!important`,
              alignItems: 'center',
              justifyContent: `${column.align}!important`,
            }}
          >
            {column?.headerName}
          </Stack>
        ))}
      </Stack>
      <Container
        onDrop={onDrop}
        lockAxis="y"
        dragHandleSelector=".drag-handler"
        render={(ref) => (
          <Box
            className="custom-t-body"
            style={{
              position: 'relative',
            }}
            ref={ref}
          >
            {rows.map((row) => (
              <Draggable
                key={getRowKey(row)}
                render={() => (
                  <Box>
                    <Stack className="custom-t-row">
                      {columns.map((column, index) => (
                        <Stack
                          direction="row"
                          key={index}
                          sx={{
                            flex: `${column.flex}!important`,
                            alignItems: 'center',
                            justifyContent: `${column.align}!important`,
                          }}
                        >
                          {column.renderCell({ row, column })}
                        </Stack>
                      ))}
                    </Stack>
                  </Box>
                )}
              />
            ))}
            {/* no items */}
            {!rows.length && <Box className="empty-msg">{noRowsMessage || 'No data'}</Box>}
          </Box>
        )}
      />
    </CustomTable>
  );
}
