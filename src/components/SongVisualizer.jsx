import { PlayOutline } from "iconoir-react";
import { useState } from "react";
import { Box, Tag, Text, Icon, Image, Heading, TagLabel } from "@chakra-ui/react";

function SongVisualizer({ topNumber, title, subTitle, imageUrl }) {
  const [showControls, setShowControls] = useState(false);

  return (
    <Box width={{ base: "100%", sm: "30%", lg: "20%" }} padding={2}>
      <Box position="relative">
        <Image
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          borderRadius="4%"
          fallback={title}
          src={imageUrl}
          width="100%"
        />
        {showControls && (
          <>
            <Tag
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              position="absolute"
              borderRadius="full"
              bottom="2%"
              size="md"
              left="2%">
              <Icon as={PlayOutline} />
            </Tag>
            <Tag
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
              borderRadius="full"
              position="absolute"
              bottom="2%"
              right="2%"
              size="sm"
              bgGradient="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,32,30,1) 65%, rgba(252,176,69,1) 100%)">
              <TagLabel color="white" fontStyle="italic" fontWeight="bold">
                Top {topNumber}
              </TagLabel>
            </Tag>
          </>
        )}
      </Box>
      <Heading fontSize="md" as="h3" noOfLines={2}>
        {title}
      </Heading>
      <Text colorScheme="gray" fontStyle="italic" noOfLines={2}>
        {subTitle}
      </Text>
    </Box>
  );
}

export { SongVisualizer };
