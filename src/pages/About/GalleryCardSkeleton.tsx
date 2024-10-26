import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";

const GalleryCardSkeleton = () => {
  return (
    <Box w="100%" h="100%" position="relative">
      <Skeleton height="300px" borderRadius="md" mb={4} />
      <SkeletonText noOfLines={2} spacing={4} />
    </Box>
  );
};

export default GalleryCardSkeleton;