import React from 'react';
import { Container, Card, Grid} from '@material-ui/core';

import PrimarySearchAppBar from './appBar'
import LeafMap from './LeafMap'
import IconBreadcrumbs from './migas'
import SimpleBottomNavigation from './bottomNav'

export default function Map(){
return(
<Container>
    <Grid>
        <PrimarySearchAppBar/>
    </Grid>
    <Card>
        <LeafMap/>
    </Card>
    <Card>
    <SimpleBottomNavigation/>
        <IconBreadcrumbs/>
    </Card>

</Container>

)

}