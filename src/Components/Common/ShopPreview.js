import StarIcon from '@mui/icons-material/Star';
import { Avatar, Box, Skeleton, Stack, Typography, useTheme } from '@mui/material';
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg';
import { ReactComponent as BikeIcon } from '../../assets/icons/delivery2.svg';
import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';
import { ReactComponent as RewardIcon } from '../../assets/icons/reward-icon.svg';
import { useGlobalContext } from '../../context';
import { ShopDeals } from '../../helpers/ShopDeals';

export default function ShopPreview({ shop, loading }) {
  const theme = useTheme();
  // const currency = useSelector((store) => store.settingsReducer.appSettingsOptions.currency.code);

  const { general } = useGlobalContext();
  const currency = general?.currency?.symbol;

  if (loading) {
    return <ComponentSkeleton />;
  }

  const Deals = new ShopDeals(shop);

  return (
    <Stack direction="row" gap={3}>
      {/* image */}
      <Box
        position="relative"
        sx={{
          flexShrink: 0,
        }}
      >
        <Avatar src={shop?.shopBanner} alt={shop?.shopName} variant="rounded" sx={{ width: 74, height: 74 }} />
        <span
          style={{
            position: 'absolute',
            right: '6px',
            top: '1px',
            color: '#fff',
          }}
        >
          <HeartIcon />
        </span>
      </Box>
      {/* details */}
      <Box
        sx={{
          flex: 1,
        }}
      >
        {/* title */}
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center">
            <Typography variant="body2" display="inline-block" pr={1.5}>
              {shop?.shopName}
            </Typography>
            {Deals.reward && <RewardIcon color="#15BFCA" />}
          </Stack>
          <Stack direction="row" alignItems="center" gap="2px">
            <StarIcon
              sx={{
                fontSize: '12px',
                color: '#4F4F4F',
              }}
            />
            <Typography
              variant="body1"
              sx={{
                fontWeight: '500',
                fontSize: '10px!important',
                lineHeight: '12px!important',
              }}
            >
              {shop?.rating}
            </Typography>
          </Stack>
        </Stack>
        {/* price-range */}
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: '10px!important',
              lineHeight: '12px!important',
              display: 'inline-block',
              paddingRight: '5px',
            }}
          >
            {shop?.tagsId?.map((tag, index, array) => ` ${tag?.name}${index === array.length - 1 ? '' : ','}`)}
            {shop?.cuisineType?.length > 0 && ', '}
            {shop?.cuisineType?.map(
              (cuisine, index, array) => `${cuisine?.name}${index === array.length - 1 ? '' : ','} `
            )}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '10px!important',
              lineHeight: '12px!important',
              display: 'inline-block',
            }}
          >
            {new Array(4).fill(0).map((item, index) => (
              <span
                key={index}
                style={{
                  color: index < shop.expensive ? undefined : '#D4D4D4',
                }}
              >
                $
              </span>
            ))}
          </Typography>
        </Box>
        {/* Info */}
        <Stack direction="row" alignItems="center" gap="7px">
          {Deals.free_delivery && <Info Icon={BikeIcon} title="Free" dot="." />}
          <Info Icon={CartIcon} title={`Min. ${currency} ${shop?.minOrderAmount}`} />
        </Stack>
        <Typography
          color={theme.palette.primary.main}
          sx={{
            fontSize: '10px!important',
            lineHeight: '14px!important',
          }}
        >
          {Deals.get_double_percentage_str()}
        </Typography>
      </Box>
    </Stack>
  );
}

function ComponentSkeleton() {
  return (
    <Stack
      direction="row"
      gap={3}
      sx={{
        height: '70px',
        position: 'relative',
      }}
    >
      <Skeleton variant="rounded" width={70} height={70} />
      <Box>
        <Stack direction="row" gap={3}>
          <Skeleton height={25} width={200} />
          <Skeleton height={25} width={25} />
        </Stack>
        <Stack gap={1.5}>
          <Skeleton height={15} />
          <Skeleton height={15} />
        </Stack>
      </Box>
    </Stack>
  );
}

function Info({ Icon, title, dot }) {
  return (
    <Typography
      sx={{
        fontSize: '10px!important',
        lineHeight: '20px!important',
        color: '#737373',
      }}
    >
      <Icon
        sx={{
          fontSize: '12px',
        }}
      />
      {` ${title} ${dot || ''}`}
    </Typography>
  );
}
