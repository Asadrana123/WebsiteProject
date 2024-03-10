import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';
import AbcIcon from '@mui/icons-material/Abc';
const CustomCard = () => {
    const cardStyle = {
        marginTop:20,
        boxShadow: '0px 8px 8px pink',
        border:"2px solid black",
        borderRadius: '8px',
        transition: 'transform 0.2s', // Add smooth transition on transform
        '&:hover': {
            transform: 'scale(1.5)', // Increase size on hover
        },
    };

    const iconStyle = {
        marginRight: '16px',
    };

    return (
        <Card style={cardStyle}>
            <CardContent>
                {/* Icon on the left */}
                <IconButton aria-label="icon" style={iconStyle}>
                    <Icon fontSize="large"><AbcIcon/> </Icon>
                </IconButton>

                <div>
                    {/* Title */}
                    <Typography variant="h5" component="div">
                    Impression analysis
                    </Typography>

                    {/* Description */}
                    <Typography variant="body2" color="text.secondary">
                    We analyze sentiment and memorability of your work to help you craft an influential essay that leaves a strong impression.
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomCard;
