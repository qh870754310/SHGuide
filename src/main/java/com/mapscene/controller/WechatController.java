package com.mapscene.controller;

import com.alibaba.fastjson.JSONObject;
import com.mapscene.util.MessageHelper;
import com.mapscene.util.ResponseHelper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.net.ssl.HttpsURLConnection;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;
import java.util.Map;

/**
 * 微信控制器
 * Created by Administrator on 2018/7/16.
 */
public class WechatController {

    @Value("${wechat.app-id}")
    private String appId;
    @Value("${wechat.app-secret}")
    private String appSecret;
    @Value("${wechat.token}")
    private String token;
    @Value("${wechat.api-domain}")
    private String apiDomain;

    /**
     * 微信公众号验证对接
     *
     * @param request  HttpServletRequest对象
     * @param response HttpServletResponse对象
     */
    @GetMapping("/wechat")
    public void verify(HttpServletRequest request, HttpServletResponse response) {
        String signature = request.getParameter("signature");
        String timestamp = request.getParameter("timestamp");
        String nonce = request.getParameter("nonce");
        String echostr = request.getParameter("echostr");
        String[] ArrTmp = {token, timestamp, nonce};
        Arrays.sort(ArrTmp);
        StringBuilder sb = new StringBuilder();
        for (String aArrTmp : ArrTmp) {
            sb.append(aArrTmp);
        }
        String pwd = Encrypt(sb.toString());
        assert pwd != null;
        if (pwd.trim().equals(signature.trim())) {
            ResponseHelper.write(response, echostr);
        }
    }

    /**
     * 消息回复
     *
     * @param request  HttpServletRequest对象
     * @param response HttpServletResponse对象
     */
    @PostMapping("/wechat")
    public void resMsg(HttpServletRequest request, HttpServletResponse response) throws Exception {
        StringBuffer msg = new StringBuffer();
        Map<String, String> map = MessageHelper.parseXml(request);
        // 发送方帐号（一个OpenID）
        String fromUserName = map.get("FromUserName");
        // 开发者微信号
        String toUserName = map.get("ToUserName");
        // 消息类型
        String msgType = map.get("MsgType");
        if (msgType.equals("event")) {//关注/取消事件
            String event = map.get("Event");
            if (event.equals("subscribe")) {//订阅事件
                msg.append("<xml>");
                msg.append("<ToUserName><![CDATA[").append(fromUserName).append("]]></ToUserName>");
                msg.append("<FromUserName><![CDATA[").append(toUserName).append("]]></FromUserName>");
                msg.append("<CreateTime>12345678</CreateTime>");
                msg.append("<MsgType><![CDATA[text]]></MsgType>");
                msg.append("<Content><![CDATA[欢迎关注！]]></Content>");
                msg.append("</xml>");
                ResponseHelper.write(response, msg);
            }
        }
        if (msgType.equals("text")) {
            String responseMessage = "我听不懂你在说什么!";//默认回复
            msg.append("<xml>");
            msg.append("<ToUserName><![CDATA[").append(fromUserName).append("]]></ToUserName>");
            msg.append("<FromUserName><![CDATA[").append(toUserName).append("]]></FromUserName>");
            msg.append("<CreateTime>12345678</CreateTime>");
            msg.append("<MsgType><![CDATA[text]]></MsgType>");
            msg.append("<Content><![CDATA[").append(responseMessage).append("]]></Content>");
            msg.append("</xml>");
            ResponseHelper.write(response, msg);
        }
    }

    /**
     * 获取AccessToken
     *
     * @param request  HttpServletRequest对象
     * @param response HttpServletResponse对象
     */
    @RequestMapping("/getAccessToken")
    public void getAccessToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String appID = request.getParameter("appID");
        String appsecret = request.getParameter("appsecret");
        String requestUrl = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + appID + "&secret=" + appsecret;
        URL reqURL = new URL(requestUrl);
        HttpsURLConnection http = (HttpsURLConnection) reqURL.openConnection();
        http.setRequestMethod("GET");
        http.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        http.setDoOutput(true);
        http.setDoInput(true);
        System.setProperty("sun.net.client.defaultConnectTimeout", "30000");//连接超时30秒
        System.setProperty("sun.net.client.defaultReadTimeout", "30000"); //读取超时30秒
        http.connect();
        InputStream is = http.getInputStream();
        int size = is.available();
        byte[] jsonBytes = new byte[size];
        is.read(jsonBytes);
        String message = new String(jsonBytes, "UTF-8");
        JSONObject jsonObject = JSONObject.parseObject(message);
        ResponseHelper.write(response, jsonObject);
    }

    /**
     * 创建菜单
     *
     * @param request  HttpServletRequest对象
     * @param response HttpServletResponse对象
     */
    @RequestMapping("/createMenu")
    public void createMenu(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String accessToken = request.getParameter("accessToken");
        String menuData = request.getParameter("menuData");
        String requestUrl = "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" + accessToken;
        URL url = new URL(requestUrl);
        HttpURLConnection http = (HttpURLConnection) url.openConnection();

        http.setRequestMethod("POST");
        http.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        http.setDoOutput(true);
        http.setDoInput(true);
        System.setProperty("sun.net.client.defaultConnectTimeout", "30000");//连接超时30秒
        System.setProperty("sun.net.client.defaultReadTimeout", "30000"); //读取超时30秒

        http.connect();
        OutputStream os = http.getOutputStream();
        os.write(menuData.getBytes("UTF-8"));//传入参数
        os.flush();
        os.close();
        InputStream is = http.getInputStream();
        int size = is.available();
        byte[] jsonBytes = new byte[size];
        is.read(jsonBytes);
        String message = new String(jsonBytes, "UTF-8");
        JSONObject jsonObject = JSONObject.parseObject(message);
        ResponseHelper.write(response, jsonObject);
    }

    /**
     * 删除菜单
     *
     * @param request  HttpServletRequest对象
     * @param response HttpServletResponse对象
     */
    @RequestMapping("/deleteMenu")
    public void deleteMenu(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String accessToken = request.getParameter("accessToken");
        String requestUrl = "https://api.weixin.qq.com/cgi-bin/menu/delete?access_token=" + accessToken;
        URL url = new URL(requestUrl);
        HttpURLConnection http = (HttpURLConnection) url.openConnection();

        http.setRequestMethod("GET");
        http.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        http.setDoOutput(true);
        http.setDoInput(true);
        System.setProperty("sun.net.client.defaultConnectTimeout", "30000");//连接超时30秒
        System.setProperty("sun.net.client.defaultReadTimeout", "30000"); //读取超时30秒

        http.connect();
        InputStream is = http.getInputStream();
        int size = is.available();
        byte[] jsonBytes = new byte[size];
        is.read(jsonBytes);
        String message = new String(jsonBytes, "UTF-8");
        JSONObject jsonObject = JSONObject.parseObject(message);
        ResponseHelper.write(response, jsonObject);
    }


    /**
     * 跳转页面
     *
     * @param request  HttpServletRequest对象
     * @param response HttpServletResponse对象
     */
    @RequestMapping("/toPage")
    public ModelAndView toPage(HttpServletRequest request, HttpServletResponse response) throws IOException {
        ModelAndView mav = new ModelAndView();
        String code = request.getParameter("code");
        String requestUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + appId + "&secret=" + appSecret + "&code=" + code + "&grant_type=authorization_code";
        URL url = new URL(requestUrl);
        HttpURLConnection http = (HttpURLConnection) url.openConnection();
        http.setRequestMethod("GET");
        http.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        http.setDoOutput(true);
        http.setDoInput(true);
        System.setProperty("sun.net.client.defaultConnectTimeout", "30000");//连接超时30秒
        System.setProperty("sun.net.client.defaultReadTimeout", "30000"); //读取超时30秒
        http.connect();
        InputStream is = http.getInputStream();
        int size = is.available();
        byte[] jsonBytes = new byte[size];
        is.read(jsonBytes);
        String message = new String(jsonBytes, "UTF-8");
        JSONObject jsonObject = JSONObject.parseObject(message);
        String openId = jsonObject.get("openid").toString();
        requestUrl = apiDomain + "/api/wechat/queryBind?openId=" + openId + "&category=1";
        url = new URL(requestUrl);
        http = (HttpURLConnection) url.openConnection();
        http.setRequestMethod("GET");
        http.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
        http.setDoOutput(true);
        http.setDoInput(true);
        System.setProperty("sun.net.client.defaultConnectTimeout", "30000");//连接超时30秒
        System.setProperty("sun.net.client.defaultReadTimeout", "30000"); //读取超时30秒
        http.connect();
        is = http.getInputStream();
        size = is.available();
        jsonBytes = new byte[size];
        is.read(jsonBytes);
        message = new String(jsonBytes, "UTF-8");
        jsonObject = JSONObject.parseObject(message);
        if (jsonObject.getBooleanValue("state")) {//已绑定
            mav.addObject("bindState", true);
            JSONObject jsonObject1 = jsonObject.getJSONObject("bindInfo");
        } else {//未绑定
            mav.addObject("bindState", false);
        }
        mav.addObject("apiDomain", apiDomain);
        mav.addObject("openId", openId);
        mav.setViewName("wechat/default");
        return mav;
    }


    private String Encrypt(String strSrc) {
        MessageDigest md;
        String strDes;

        byte[] bt = strSrc.getBytes();
        try {
            md = MessageDigest.getInstance("SHA-1");
            md.update(bt);
            strDes = bytes2Hex(md.digest());
        } catch (NoSuchAlgorithmException e) {
            System.out.println("Invalid algorithm.");
            return null;
        }
        return strDes;
    }

    private String bytes2Hex(byte[] bts) {
        StringBuilder des = new StringBuilder();
        String tmp;
        for (byte bt : bts) {
            tmp = (Integer.toHexString(bt & 0xFF));
            if (tmp.length() == 1) {
                des.append("0");
            }
            des.append(tmp);
        }
        return des.toString();
    }

}
