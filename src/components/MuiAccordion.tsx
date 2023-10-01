import { 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
    } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useState }from 'react'

export const MuiAccordion = () => {

    const [expanded, setExpanded] = useState<string | false>()
    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false)
    }
    return(
    <div>
        <Accordion
            expanded={ expanded === 'panel-1'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel-1')}
        >
            <AccordionSummary
                id='panel1-header'
                aria-controls='panel1-header'
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion 1</Typography>
            </AccordionSummary>    
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vero nostrum? Quia facere reiciendis provident modi accusamus, harum omnis sint molestias dolor quos inventore doloribus voluptatum voluptates quod corrupti eaque.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion
            expanded={ expanded === 'panel-2'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel-2')}
        >
            <AccordionSummary
                id='panel2-header'
                aria-controls='panel2-header'
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion 2</Typography>
            </AccordionSummary>    
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vero nostrum? Quia facere reiciendis provident modi accusamus, harum omnis sint molestias dolor quos inventore doloribus voluptatum voluptates quod corrupti eaque.</Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion 
            expanded={ expanded === 'panel-3'}
            onChange={(event, isExpanded) => handleChange(isExpanded, 'panel-3')}
        >
            <AccordionSummary
                id='panel3-header'
                aria-controls='panel3-header'
                expandIcon={<ExpandMoreIcon />}
            >
                <Typography>Accordion 3</Typography>
            </AccordionSummary>    
            <AccordionDetails>
                <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, vero nostrum? Quia facere reiciendis provident modi accusamus, harum omnis sint molestias dolor quos inventore doloribus voluptatum voluptates quod corrupti eaque.</Typography>
            </AccordionDetails>
        </Accordion>
        
    </div>
    )
}