/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Colors} from '../../constants/colors';
import FontFamily from '../../constants/Font';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const AllPlans = props => {
  const SECTIONS = [
    'Popular',
    'Special Recharge',
    'Top Up',
    '2G/3G/4G',
    'Data Roaming',
  ];
  const [selectedSection, setSelectedSection] = React.useState(0);
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 15,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <View>
          <Text
            style={{
              color: Colors.facebookBlue,
              fontSize: 18,
              lineHeight: 20,
              fontFamily: FontFamily.RobotoMedium,
            }}>
            Browse Plans
          </Text>
          <Text
            style={{
              fontSize: 18,
              lineHeight: 20,
              fontFamily: FontFamily.RobotoRegular,
            }}>
            for Airtel - West Bengal
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Entypo name="cross" size={30} />
        </TouchableOpacity>
      </View>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#F5F5F5',
          height: 50,
          margin: 15,
          backgroundColor: '#fff',
          borderRadius: 10,
          paddingLeft: 20,
        }}
        placeholder={'Search for plan or enter amount'}
      />
      <View
        style={{
          height: 60,
          borderBottomWidth: 1,
          borderBottomColor: Colors.fadeSilver,
        }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            paddingVertical: 12,
            backgroundColor: Colors.white,
            paddingHorizontal: 15,
          }}
          horizontal={true}>
          {SECTIONS.map((single, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedSection(index)}>
              <Text
                style={[
                  styles.sectionText,
                  {color: selectedSection == index ? '#000' : '#A6A6A6'},
                ]}>
                {' '}
                {single}{' '}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{flex: 1}}>
        <ScrollView>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.white,
              minHeight: 50,
              marginTop: 2,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Talktime
                </Text>
                <FontAwesome
                  color={Colors.pureBlack}
                  name="inr"
                  size={15}
                  style={{marginLeft: 10}}>
                  <Text> 0</Text>
                </FontAwesome>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  DATA
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  42 GB (1.5GB/Day)
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  SMS
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  100 SMS / Day
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Validity
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  28 Days
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                borderBottomColor: '#EEF0FA',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    color: '#77798B',
                  }}>
                  Now get Truly Umlimited Local/National Calls to all Networks
                  +1.5GB/Day+100SMS/Day.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.blue,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}>
                <FontAwesome color={Colors.white} name="inr" size={15}>
                  <Text
                    style={{color: Colors.white, fontSize: 14, lineHeight: 16}}>
                    {' '}
                    249
                  </Text>
                </FontAwesome>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.white,
              minHeight: 50,
              marginTop: 2,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Talktime
                </Text>
                <FontAwesome
                  color={Colors.pureBlack}
                  name="inr"
                  size={15}
                  style={{marginLeft: 10}}>
                  <Text> 0</Text>
                </FontAwesome>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  DATA
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  42 GB (1.5GB/Day)
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  SMS
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  100 SMS / Day
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Validity
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  28 Days
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                borderBottomColor: '#EEF0FA',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    color: '#77798B',
                  }}>
                  Now get Truly Umlimited Local/National Calls to all Networks
                  +1.5GB/Day+100SMS/Day.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.blue,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}>
                <FontAwesome color={Colors.white} name="inr" size={15}>
                  <Text
                    style={{color: Colors.white, fontSize: 14, lineHeight: 16}}>
                    {' '}
                    249
                  </Text>
                </FontAwesome>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.white,
              minHeight: 50,
              marginTop: 2,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Talktime
                </Text>
                <FontAwesome
                  color={Colors.pureBlack}
                  name="inr"
                  size={15}
                  style={{marginLeft: 10}}>
                  <Text> 0</Text>
                </FontAwesome>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  DATA
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  42 GB (1.5GB/Day)
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  SMS
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  100 SMS / Day
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Validity
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  28 Days
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                borderBottomColor: '#EEF0FA',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    color: '#77798B',
                  }}>
                  Now get Truly Umlimited Local/National Calls to all Networks
                  +1.5GB/Day+100SMS/Day.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.blue,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}>
                <FontAwesome color={Colors.white} name="inr" size={15}>
                  <Text
                    style={{color: Colors.white, fontSize: 14, lineHeight: 16}}>
                    {' '}
                    249
                  </Text>
                </FontAwesome>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.white,
              minHeight: 50,
              marginTop: 2,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Talktime
                </Text>
                <FontAwesome
                  color={Colors.pureBlack}
                  name="inr"
                  size={15}
                  style={{marginLeft: 10}}>
                  <Text> 0</Text>
                </FontAwesome>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  DATA
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  42 GB (1.5GB/Day)
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  SMS
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  100 SMS / Day
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Validity
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  28 Days
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                borderBottomColor: '#EEF0FA',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    color: '#77798B',
                  }}>
                  Now get Truly Umlimited Local/National Calls to all Networks
                  +1.5GB/Day+100SMS/Day.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.blue,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}>
                <FontAwesome color={Colors.white} name="inr" size={15}>
                  <Text
                    style={{color: Colors.white, fontSize: 14, lineHeight: 16}}>
                    {' '}
                    249
                  </Text>
                </FontAwesome>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.white,
              minHeight: 50,
              marginTop: 2,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Talktime
                </Text>
                <FontAwesome
                  color={Colors.pureBlack}
                  name="inr"
                  size={15}
                  style={{marginLeft: 10}}>
                  <Text> 0</Text>
                </FontAwesome>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  DATA
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  42 GB (1.5GB/Day)
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  SMS
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  100 SMS / Day
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Validity
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  28 Days
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                borderBottomColor: '#EEF0FA',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    color: '#77798B',
                  }}>
                  Now get Truly Umlimited Local/National Calls to all Networks
                  +1.5GB/Day+100SMS/Day.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.blue,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}>
                <FontAwesome color={Colors.white} name="inr" size={15}>
                  <Text
                    style={{color: Colors.white, fontSize: 14, lineHeight: 16}}>
                    {' '}
                    249
                  </Text>
                </FontAwesome>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.white,
              minHeight: 50,
              marginTop: 2,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Talktime
                </Text>
                <FontAwesome
                  color={Colors.pureBlack}
                  name="inr"
                  size={15}
                  style={{marginLeft: 10}}>
                  <Text> 0</Text>
                </FontAwesome>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  DATA
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  42 GB (1.5GB/Day)
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  SMS
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  100 SMS / Day
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Validity
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  28 Days
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                borderBottomColor: '#EEF0FA',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    color: '#77798B',
                  }}>
                  Now get Truly Umlimited Local/National Calls to all Networks
                  +1.5GB/Day+100SMS/Day.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.blue,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}>
                <FontAwesome color={Colors.white} name="inr" size={15}>
                  <Text
                    style={{color: Colors.white, fontSize: 14, lineHeight: 16}}>
                    {' '}
                    249
                  </Text>
                </FontAwesome>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.white,
              minHeight: 50,
              marginTop: 2,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Talktime
                </Text>
                <FontAwesome
                  color={Colors.pureBlack}
                  name="inr"
                  size={15}
                  style={{marginLeft: 10}}>
                  <Text> 0</Text>
                </FontAwesome>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  DATA
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  42 GB (1.5GB/Day)
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  SMS
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  100 SMS / Day
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Validity
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  28 Days
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                borderBottomColor: '#EEF0FA',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    color: '#77798B',
                  }}>
                  Now get Truly Umlimited Local/National Calls to all Networks
                  +1.5GB/Day+100SMS/Day.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.blue,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}>
                <FontAwesome color={Colors.white} name="inr" size={15}>
                  <Text
                    style={{color: Colors.white, fontSize: 14, lineHeight: 16}}>
                    {' '}
                    249
                  </Text>
                </FontAwesome>
              </View>
            </View>
          </View>
          <View
            style={{
              paddingVertical: 15,
              backgroundColor: Colors.white,
              minHeight: 50,
              marginTop: 2,
              marginBottom: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Talktime
                </Text>
                <FontAwesome
                  color={Colors.pureBlack}
                  name="inr"
                  size={15}
                  style={{marginLeft: 10}}>
                  <Text> 0</Text>
                </FontAwesome>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  DATA
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  42 GB (1.5GB/Day)
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  SMS
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  100 SMS / Day
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  backgroundColor: Colors.white,
                  marginHorizontal: 10,
                }}>
                <Text
                  style={{
                    color: '#7B7B7B',
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    marginBottom: 10,
                  }}>
                  {' '}
                  Validity
                </Text>
                <Text
                  style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'flex-start',
                    fontFamily: FontFamily.RobotoBold,
                    fontSize: 10,
                    lineHeight: 12,
                  }}>
                  {' '}
                  28 Days
                </Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
                borderBottomColor: '#EEF0FA',
                borderBottomWidth: StyleSheet.hairlineWidth,
                marginTop: 10,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                paddingHorizontal: 15,
              }}>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontFamily: FontFamily.RobotoRegular,
                    fontSize: 10,
                    lineHeight: 12,
                    color: '#77798B',
                  }}>
                  Now get Truly Umlimited Local/National Calls to all Networks
                  +1.5GB/Day+100SMS/Day.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: Colors.blue,
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}>
                <FontAwesome color={Colors.white} name="inr" size={15}>
                  <Text
                    style={{color: Colors.white, fontSize: 14, lineHeight: 16}}>
                    {' '}
                    249
                  </Text>
                </FontAwesome>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.pageBackground,
  },
  sectionText: {
    fontFamily: FontFamily.RobotoBold,
    fontSize: 14,
    lineHeight: 20,
    marginRight: 15,
  },
});

export default AllPlans;
