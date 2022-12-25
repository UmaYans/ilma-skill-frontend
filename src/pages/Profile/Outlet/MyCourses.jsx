import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getServiceTeacher } from "../../../redux-toolkit/features/serviceSlice";
import {
  getAllUsers,
  getUser,
} from "../../../redux-toolkit/features/usersSlice";
import style from "./style/MyCourse.module.css"
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

const MyCourses = () => {
  const dispatch = useDispatch();

  const [check, setCheck] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const user = useSelector((state) => state.user.users);
  const users = useSelector((state) => state.user.allUsers);
  // const loading = useSelector((state) => state.user.loading);

  const services = useSelector((state) => state.serv.teacherService);
  const loading = useSelector((state) => state.serv.loading);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const readMore = () => {
    setCheck(!check);
  };

  useEffect(() => {
    dispatch(getUser());
    dispatch(getServiceTeacher());
    dispatch(getAllUsers());
  }, [dispatch]);

  if (!services || loading) {
    return <div>...</div>;
  }

  return (
    <div>
      <p>Мои размещенные курсы </p>
      <div className={style.wrapper}>
        {services.length === 0 ? (
          <div>
            Нет размещенных курсов.Добавить{" "}
            <Link to="/profile/newCurses">курс?</Link>{" "}
          </div>
        ) : (
          services.map((service) => {
            return (
              // <div className={style.mainCourse} key={service._id}>
              //   <div className={style.courseUser}>
              //     <div>
              //       <img
              //         src={`/public/${service.image}`}
              //         alt=""
              //         className={style.imgUserCourse}
              //       />
              //     </div>
              //     <div style={style.courseName}> {service.name}</div>
              //     <div className={style.courseDescription}>
              //       {service.description}
              //     </div>
              //     <div className={style.courseFormat}>{service.format}</div>
              //   </div>
              // </div>
              // <Card sx={{ maxWidth: 345 }} key={service._id}>
              //   <CardMedia
              //     component="img"
              //     height="194"
              //     image={`/public/${service.image}`}
              //     alt="Paella dish"
              //   />

              //   <CardContent>
              //     <Typography variant="body2" color="text.secondary">
              //       {service.description}
              //     </Typography>
              //   </CardContent>
              //   <CardActions disableSpacing>
              //     <IconButton aria-label="add to favorites">
              //       <FavoriteIcon />
              //     </IconButton>
              //     <IconButton aria-label="share">
              //       <ShareIcon />
              //     </IconButton>
              //     <ExpandMore
              //       expand={expanded}
              //       onClick={handleExpandClick}
              //       aria-expanded={expanded}
              //       aria-label="show more"
              //     >
              //       <ExpandMoreIcon />
              //     </ExpandMore>
              //   </CardActions>
              //   <Collapse in={expanded} timeout="auto" unmountOnExit>
              //     <CardContent>
              //       <Typography paragraph>Method:</Typography>
              //       <Typography paragraph>
              //         Heat 1/2 cup of the broth in a pot until simmering, add
              //         saffron and set aside for 10 minutes.
              //       </Typography>
              //       <Typography paragraph>
              //         Heat oil in a (14- to 16-inch) paella pan or a large, deep
              //         skillet over medium-high heat. Add chicken, shrimp and
              //         chorizo, and cook, stirring occasionally until lightly
              //         browned, 6 to 8 minutes. Transfer shrimp to a large plate
              //         and set aside, leaving chicken and chorizo in the pan. Add
              //         pimentón, bay leaves, garlic, tomatoes, onion, salt and
              //         pepper, and cook, stirring often until thickened and
              //         fragrant, about 10 minutes. Add saffron broth and
              //         remaining 4 1/2 cups chicken broth; bring to a boil.
              //       </Typography>
              //       <Typography paragraph>
              //         Add rice and stir very gently to distribute. Top with
              //         artichokes and peppers, and cook without stirring, until
              //         most of the liquid is absorbed, 15 to 18 minutes. Reduce
              //         heat to medium-low, add reserved shrimp and mussels,
              //         tucking them down into the rice, and cook again without
              //         stirring, until mussels have opened and rice is just
              //         tender, 5 to 7 minutes more. (Discard any mussels that
              //         don&apos;t open.)
              //       </Typography>
              //       <Typography>
              //         Set aside off of the heat to let rest for 10 minutes, and
              //         then serve.
              //       </Typography>
              //     </CardContent>
              //   </Collapse>
              // </Card>
              <div className={style.card}>
                <div className={style.hover_text_one}>
                  <NavLink
                    to={`/course/${service._id}`}
                    className={style.nav_servName}
                  >
                    <figure className={style.effect__text_three}>
                      <img
                        src={`/public/${service.image}`}
                        alt={service.name}
                      />
                      <figcaption>
                        <h3> {service.name}</h3>
                        <p> </p>
                      </figcaption>
                    </figure>
                  </NavLink>
                </div>

                <div className={style.course_info}>
                  <div className={style.nav_servName_div}></div>

                  <div className={style.text_block}>
                    <div>
                      {!check ? (
                        <span>
                          {service.description.substring(0, 90)}
                          <span
                            onClick={readMore}
                            className={style.button_second}
                          >
                            ...
                          </span>{" "}
                        </span>
                      ) : (
                        <span onClick={readMore}>{service.description}</span>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className={style.format_card}>
                      {service.format.map((format, index) => (
                        <div
                          key={index}
                          className={`${
                            index % 2 === 0 ? style.online : style.offline
                          }`}
                        >
                          {format}
                        </div>
                      ))}
                    </div>
                  </div>
                  <p>
                    {service.price} ₽ <s> {service.oldPrice} </s>
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MyCourses;
