import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./style/SaveCourses.module.css";
import {
  getAllUsers,
  getUser,
} from "../../../redux-toolkit/features/usersSlice";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const BuyCourses = () => {
  const dispatch = useDispatch();

  const [expanded, setExpanded] = React.useState(false);

  const user = useSelector((state) => state.user.users);
  const users = useSelector((state) => state.user.allUsers);
  const loading = useSelector((state) => state.user.loading);

  useEffect(() => {
    dispatch(getUser());
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const nameTeach = (id) => {
    const usera = users.find((user) => user._id === id);
    console.log(usera);
    if (usera) {
      return usera;
    }
    return "...";
  };

  console.log(users, "32");
  console.log(user, "32");

  if (!user || loading || !users) {
    return <div>...</div>;
  }

  return (
    <div>
      <p>Купленные курсы</p>
      <div className={style.wrapper}>
        {user.myCourses.length === 0 ? (
          <div>
            Нет сохраненных курсов.Найти <Link to="/course">курс?</Link>
          </div>
        ) : (
          user.myCourses.map((course) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={course._id}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="recipe">
                      <img
                        src={`http://localhost:4100/${
                          nameTeach(course.teacher)?.avatar
                        }`}
                        alt={nameTeach(course.teacher)?.firstName}
                        className={style.card_avater}
                      />
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={`${nameTeach(course.teacher).firstName} ${
                    nameTeach(course.teacher).lastName
                  }`}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={`/public/${course.image}`}
                  alt="Paella dish"
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {course.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep
                      skillet over medium-high heat. Add chicken, shrimp and
                      chorizo, and cook, stirring occasionally until lightly
                      browned, 6 to 8 minutes. Transfer shrimp to a large plate
                      and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and
                      pepper, and cook, stirring often until thickened and
                      fragrant, about 10 minutes. Add saffron broth and
                      remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                      Add rice and stir very gently to distribute. Top with
                      artichokes and peppers, and cook without stirring, until
                      most of the liquid is absorbed, 15 to 18 minutes. Reduce
                      heat to medium-low, add reserved shrimp and mussels,
                      tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just
                      tender, 5 to 7 minutes more. (Discard any mussels that
                      don&apos;t open.)
                    </Typography>
                    <Typography>
                      Set aside off of the heat to let rest for 10 minutes, and
                      then serve.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BuyCourses;
