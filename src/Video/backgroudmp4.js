import React, { Component } from 'react'
import { Text, View, StyleSheet} from 'react-native'
import VideoPlayer from 'react-native-video';


class VideoPlayerView extends Component{
    render(){
       return(
          <View styles={styles.container}>
              <VideoPlayer
              source={require('../Video/LogoAnimado.mp4')}
              ></VideoPlayer>
          </View>

       )

    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
})
export default VideoPlayerView