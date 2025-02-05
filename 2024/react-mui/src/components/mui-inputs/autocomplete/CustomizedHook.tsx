// components/mui-inputs/autocomplete/CustomizedHook.tsx
import { useAutocomplete } from "@mui/base/useAutocomplete";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import type { AutocompleteGetTagProps } from "@mui/base/useAutocomplete";

const Root = styled("div")(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 0.65)"
      : "rgba(0, 0, 0, 0.85)",
  fontSize: 14,
}));

const Label = styled("label")({
  padding: "0 0 4px",
  lineHeight: 1.5,
  display: "block",
});

const InputWrapper = styled("div")(({ theme }) => ({
  width: "300px",
  border: `1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"}`,
  backgroundColor: theme.palette.mode === "dark" ? "#141414" : "#fff",
  borderRadius: 4,
  padding: 1,
  display: "flex",
  flexWrap: "wrap",
  "&:hover": {
    borderColor: theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff",
  },
  "&.focused": {
    borderColor: theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff",
    boxShadow: "0 0 0 2px rgba(24, 144, 255, 0.2)",
  },
  "& input": {
    backgroundColor: theme.palette.mode === "dark" ? "#141414" : "#fff",
    color: theme.palette.mode === "dark" ? "#141414" : "#fff",
    height: 30,
    boxSizing: "border-box",
    padding: "4px 6px",
    width: 0,
    minWidth: 30,
    flexGrow: 1,
    border: 0,
    margin: 0,
    outline: 0,
  },
}));

interface TagProps extends ReturnType<AutocompleteGetTagProps> {
  label: string;
}

function Tag(props: TagProps) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

const StyledTag = styled(Tag)<TagProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: 24,
  margin: 2,
  lineHeight: 22,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.08" : "#fafafa",
  border: `1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"}`,
  borderRadius: 2,
  boxSizing: "content-box",
  padding: "0 4px 0 10px",
  outline: 0,
  overflow: "hidden",
  "&:focus": {
    borderColor: theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff",
    backgroundColor: theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff",
  },
  "& span": {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  "& svg": {
    fontSize: 12,
    cursor: "pointer",
    padding: 4,
  },
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 300,
  margin: "2px 0 0",
  padding: 0,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.mode === "dark" ? "#141414" : "#fff",
  overflow: "auto",
  maxHeight: 250,
  borderRadius: 4,
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
  zIndex: 1,
  "& li": {
    padding: "5px 12px",
    display: "flex",
    "& span": {
      flexGrow: 1,
    },
    "& svg": {
      color: "transparent",
    },
  },
  "& li[aria-selected='true']": {
    backgroundColor: theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa",
    fontWeight: 600,
    "& svg": {
      color: "#1890ff",
    },
  },
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff",
    cursor: "pointer",
    "& svg": {
      color: "currentColor",
    },
  },
}));

export default function CustomizedHook() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [top100Films[1]],
    multiple: true,
    options: top100Films,
    getOptionLabel: ({ title }) => title,
  });

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Customized hook</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option: FilmOptionType, index) => {
            const { key, ...tagProps } = getTagProps({ index });
            return <StyledTag key={key} {...tagProps} label={option.title} />;
          })}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 && (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof top100Films).map((option, index) => {
            const { ...optionProps } = getOptionProps({ option, index });
            return (
              <li key={option.title} {...optionProps}>
                <span>{option.title}</span>
                <CheckIcon fontSize="small" />
              </li>
            );
          })}
        </Listbox>
      )}
    </Root>
  );
}

interface FilmOptionType {
  title: string;
  year: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
