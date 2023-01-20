import { LoadingButton } from "@mui/lab";
import { Box, Button, Stack, TextField, Toolbar } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import mediaApi from "../api/modules/media.api";
import MediaGrid from "../components/common/MediaGrid";
import uiConfigs from "../configs/ui.config";

const mediaTypes = ["movie", "tv", "people"];
let timer = 0;
const timeout = 500;

const MediaSearch = () => {
  const [query, setQuery] = useState("");
  const [onSearch, setOnSearch] = useState(false);
  const [mediaType, setMediaType] = useState(mediaTypes[0]);
  const [medias, setMedias] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const search = useCallback(async () => {
    setOnSearch(true);
    const { response, err } = await mediaApi.search({
      mediaType,
      query,
      page,
    });

    setOnSearch(false);
    if (err) toast.error(err.message);
    if (response) {
      if (page > 1) setMedias((m) => [...m, ...response.results]);
      else setMedias([...response.results]);

      if (response["total_pages"]) setTotalPage(response["total_pages"]);
    }
  }, [mediaType, query, page]);

  useEffect(() => {
    if (query.trim().length === 0) {
      setMedias([]);
      setPage(1);
    } else search();
  }, [query, search, page]);

  useEffect(() => {
    setMedias([]);
    setPage(1);
  }, [mediaType]);

  const onCategoryChange = (selectedCategory) => {
    if (page > 1) setPage(1);
    setMediaType(selectedCategory);
  };

  const onQueryChange = (e) => {
    const newQuery = e.target.value;
    clearTimeout(timer);
    if (page > 1) setPage(1);

    timer = setTimeout(() => {
      setQuery(newQuery);
    }, timeout);
  };

  return (
    <>
      <Toolbar />
      <Box sx={{ ...uiConfigs.style.mainContent }}>
        <Stack spacing={2}>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            sx={{ width: "100%" }}
          >
            {mediaTypes.map((item, index) => (
              <Button
                size="large"
                key={index}
                variant={mediaType === item ? "contained" : "text"}
                sx={{
                  color:
                    mediaType === item
                      ? "primary.contrastText"
                      : "text.primary",
                }}
                onClick={() => onCategoryChange(item)}
              >
                {item}
              </Button>
            ))}
          </Stack>
          <TextField
            color="success"
            placeholder="Search MoonFlix"
            sx={{ width: "100%" }}
            autoFocus
            onChange={onQueryChange}
          />
          <MediaGrid medias={medias} mediaType={mediaType} />
          {page < totalPage && (
            <LoadingButton
              loading={onSearch}
              onClick={() => setPage((p) => p + 1)}
            >
              load more
            </LoadingButton>
          )}
        </Stack>
      </Box>
    </>
  );
};

export default MediaSearch;
